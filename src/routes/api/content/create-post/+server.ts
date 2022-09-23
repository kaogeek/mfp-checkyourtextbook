import getCollection from '$core/functions/collection';
import { json } from '@sveltejs/kit';
import { ObjectId } from 'mongodb';

export async function POST({ request }: { request: Request }) {
  const body = await request.json();

  const {
    users: userCollection,
    contents: contentCollection,
    hashtags: hashtagCollection,
  } = await getCollection();

  let user = await userCollection.findOne({ aliasName: body.name });

  if (!user) {
    const insert = await userCollection.insertOne({
      aliasName: body.name,
      clientType: 'general',
      clientUUID: crypto.randomUUID(),
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    user = {
      _id: insert.insertedId,
      aliasName: body.name,
    };
  }

  const prepareHashtags = body.hashtag.map((hashtag: any) => {
    return {
      name: hashtag,
      slug: hashtag.replace(/\s/g, '_'),
      visibility: 'publish',
      createdAt: new Date(),
      updatedAt: new Date(),
    };
  });

  const [insert] = await Promise.all([
    contentCollection.insertOne({
      ...body,
      photo: {
        url: `http://placeimg.com/${Math.floor(
          Math.random() * (600 - 300 + 1) + 300
        )}/${Math.floor(Math.random() * (600 - 300 + 1) + 300)}/business`,
        size: body.photo.size,
      },
      hashtag: body.hashtag.map((hashtag: string) =>
        hashtag.replace(/\s/g, '_')
      ),
      visibility: 'publish',
      createdAt: new Date(),
      updatedAt: new Date(),
    }),
    hashtagCollection.insertMany(prepareHashtags),
  ]);

  const [content] = await contentCollection.aggregate([
    {
      $match: {
        _id: new ObjectId(insert.insertedId),
        visibility: 'publish',
      },
    },
    {
      $sort: { _id: -1 },
    },
    {
      $project: {
        title: 1,
        description: 1,
        photo: 1,
      },
    },
    {
      $lookup: {
        from: 'engagementCount',
        localField: '_id',
        foreignField: 'contentId',
        as: 'engagementsCount',
      },
    },
    {
      $unwind: {
        path: '$engagementsCount',
        preserveNullAndEmptyArrays: true,
      },
    },
    {
      $lookup: {
        from: 'engagements',
        let: {
          contentId: '$_id',
          userId: new ObjectId(user._id),
        },
        pipeline: [
          {
            $match: {
              $expr: {
                $and: [
                  { $eq: ['$userId', '$$userId'] },
                  { $eq: ['$contentId', '$$contentId'] },
                  { $eq: ['$status', 'upvote'] },
                ],
              },
            },
          },
          {
            $limit: 1,
          },
          {
            $project: {
              value: true,
            },
          },
        ],
        as: 'upvote',
      },
    },
    {
      $unwind: {
        path: '$upvote',
        preserveNullAndEmptyArrays: true,
      },
    },
    {
      $lookup: {
        from: 'engagements',
        let: {
          contentId: '$_id',
          userId: new ObjectId(user._id),
        },
        pipeline: [
          {
            $match: {
              $expr: {
                $and: [
                  { $eq: ['$userId', '$$userId'] },
                  { $eq: ['$contentId', '$$contentId'] },
                  { $eq: ['$status', 'downvote'] },
                ],
              },
            },
          },
          {
            $limit: 1,
          },
          {
            $project: {
              _id: 1,
            },
          },
        ],
        as: 'downvote',
      },
    },
    {
      $unwind: {
        path: '$downvote',
        preserveNullAndEmptyArrays: true,
      },
    },
    {
      $project: {
        title: 1,
        description: 1,
        photo: 1,
        upvoteCount: { $ifNull: ['$engagementsCount.upvote', 0] },
        downvoteCount: { $ifNull: ['$engagementsCount.downvote', 0] },
        upvote: { $cond: [{ $ifNull: ['$upvote', false] }, true, false] },
        downvote: { $cond: [{ $ifNull: ['$downvote', false] }, true, false] },
      },
    },
  ]);

  return json({
    user,
    content,
  });
  return json({});
}
