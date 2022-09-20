import { g as getCollection } from '../../../../../chunks/collection.js';
import { j as json } from '../../../../../chunks/index2.js';
import { ObjectId } from 'mongodb';

async function GET({ url }) {
  const limit = 10;
  let skip = 0;
  const page = url.searchParams.get("page");
  const userId = url.searchParams.get("userId");
  if (page) {
    skip = Number(page) * 10;
  }
  const { contents: contentCollection } = await getCollection();
  const contents = await contentCollection.aggregate([
    {
      $match: {
        visibility: "publish"
      }
    },
    {
      $sort: { _id: -1 }
    },
    {
      $skip: skip
    },
    {
      $limit: limit
    },
    {
      $project: {
        title: 1,
        description: 1,
        photo: 1
      }
    },
    {
      $lookup: {
        from: "engagementCount",
        localField: "_id",
        foreignField: "contentId",
        as: "engagementsCount"
      }
    },
    {
      $unwind: {
        path: "$engagementsCount",
        preserveNullAndEmptyArrays: true
      }
    },
    {
      $lookup: {
        from: "engagements",
        let: {
          contentId: "$_id",
          userId: userId ? new ObjectId(userId) : null
        },
        pipeline: [
          {
            $match: {
              $expr: {
                $and: [
                  { $eq: ["$userId", "$$userId"] },
                  { $eq: ["$contentId", "$$contentId"] },
                  { $eq: ["$status", "upvote"] }
                ]
              }
            }
          },
          {
            $limit: 1
          },
          {
            $project: {
              value: true
            }
          }
        ],
        as: "upvote"
      }
    },
    {
      $unwind: {
        path: "$upvote",
        preserveNullAndEmptyArrays: true
      }
    },
    {
      $lookup: {
        from: "engagements",
        let: {
          contentId: "$_id",
          userId: userId ? new ObjectId(userId) : null
        },
        pipeline: [
          {
            $match: {
              $expr: {
                $and: [
                  { $eq: ["$userId", "$$userId"] },
                  { $eq: ["$contentId", "$$contentId"] },
                  { $eq: ["$status", "downvote"] }
                ]
              }
            }
          },
          {
            $limit: 1
          },
          {
            $project: {
              _id: 1
            }
          }
        ],
        as: "downvote"
      }
    },
    {
      $unwind: {
        path: "$downvote",
        preserveNullAndEmptyArrays: true
      }
    },
    {
      $project: {
        title: 1,
        description: 1,
        photo: 1,
        upvoteCount: { $ifNull: ["$engagementsCount.upvote", 0] },
        downvoteCount: { $ifNull: ["$engagementsCount.downvote", 0] },
        upvote: { $cond: [{ $ifNull: ["$upvote", false] }, true, false] },
        downvote: { $cond: [{ $ifNull: ["$downvote", false] }, true, false] }
      }
    }
  ]);
  return json(contents);
}

export { GET };
