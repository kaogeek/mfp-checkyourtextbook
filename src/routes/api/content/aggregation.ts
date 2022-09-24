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
          upvoteCount: { $ifNull: ['$engagementsCount.upvote', 0] },
          downvoteCount: { $ifNull: ['$engagementsCount.downvote', 0] },
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
        $project: {
          status: 1,
          reason: 1,
          createdAt: 1,
          author: '$users.aliasName',
        },
      },
    ];
  }
}
