import { ObjectId } from 'mongodb';

export interface SortContent {
  _id: number;
}

export class Aggregation {
  static getContents(
    filters: { [key: string]: any },
    sort: SortContent,
    skip: number,
    limit: number,
    userId: string | null
  ) {
    return [
      {
        $match: filters,
      },
      {
        $sort: sort,
      },
      {
        $skip: skip,
      },
      {
        $limit: limit,
      },
      {
        $project: {
          title: 1,
          description: 1,
          userId: 1,
          photo: 1,
          hashtag: 1,
        },
      },
      {
        $lookup: {
          from: 'engagementCount',
          localField: '_id',
          foreignField: 'contentId',
          as: 'engagementCount',
        },
      },
      {
        $unwind: {
          path: '$engagementCount',
          preserveNullAndEmptyArrays: true,
        },
      },
      {
        $lookup: {
          from: 'users',
          localField: 'userId',
          foreignField: '_id',
          as: 'users',
        },
      },
      {
        $unwind: {
          path: '$users',
        },
      },
      {
        $lookup: {
          from: 'engagements',
          let: {
            contentId: '$_id',
            userId: userId ? new ObjectId(userId) : null,
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
            userId: userId ? new ObjectId(userId) : null,
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
          hashtag: 1,
          author: '$users.aliasName',
          upvoteCount: { $ifNull: ['$engagementCount.upvote', 0] },
          downvoteCount: { $ifNull: ['$engagementCount.downvote', 0] },
          upvote: { $cond: [{ $ifNull: ['$upvote', false] }, true, false] },
          downvote: { $cond: [{ $ifNull: ['$downvote', false] }, true, false] },
        },
      },
    ];
  }

  static getComments(
    filters: { [key: string]: any },
    sort: SortContent,
    skip: number,
    limit: number,
    userId: string | null
  ) {
    return [
      {
        $match: filters,
      },
      {
        $sort: sort,
      },
      {
        $skip: skip,
      },
      {
        $limit: limit,
      },
      {
        $lookup: {
          from: 'engagementLikeCount',
          localField: '_id',
          foreignField: 'commentId',
          as: 'engagementLikeCount',
        },
      },
      {
        $unwind: {
          path: '$engagementLikeCount',
          preserveNullAndEmptyArrays: true,
        },
      },
      {
        $lookup: {
          from: 'users',
          localField: 'userId',
          foreignField: '_id',
          as: 'users',
        },
      },
      {
        $unwind: {
          path: '$users',
        },
      },
      {
        $lookup: {
          from: 'engagements',
          let: {
            commentId: '$_id',
            userId: userId ? new ObjectId(userId) : null,
          },
          pipeline: [
            {
              $match: {
                $expr: {
                  $and: [
                    { $eq: ['$userId', '$$userId'] },
                    { $eq: ['$commentId', '$$commentId'] },
                    { $eq: ['$status', 'like'] },
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
          as: 'like',
        },
      },
      {
        $unwind: {
          path: '$like',
          preserveNullAndEmptyArrays: true,
        },
      },
      {
        $lookup: {
          from: 'engagements',
          let: {
            commentId: '$_id',
            userId: userId ? new ObjectId(userId) : null,
          },
          pipeline: [
            {
              $match: {
                $expr: {
                  $and: [
                    { $eq: ['$userId', '$$userId'] },
                    { $eq: ['$commentId', '$$commentId'] },
                    { $eq: ['$status', 'dislike'] },
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
          as: 'dislike',
        },
      },
      {
        $unwind: {
          path: '$dislike',
          preserveNullAndEmptyArrays: true,
        },
      },
      {
        $project: {
          status: 1,
          reason: 1,
          contentId: 1,
          commentId: 1,
          createdAt: 1,
          author: '$users.aliasName',
          likeCount: { $ifNull: ['$engagementLikeCount.like', 0] },
          dislikeCount: { $ifNull: ['$engagementLikeCount.dislike', 0] },
          like: { $cond: [{ $ifNull: ['$like', false] }, true, false] },
          dislike: { $cond: [{ $ifNull: ['$dislike', false] }, true, false] },
        },
      },
    ];
  }
}
