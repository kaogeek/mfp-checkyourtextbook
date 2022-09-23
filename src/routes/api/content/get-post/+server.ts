import getCollection from '$core/functions/collection';
import { json } from '@sveltejs/kit';
import { ObjectId } from 'mongodb';
import { DateTime } from 'luxon';

export async function GET({ url }: { url: URL }) {
  const {
    contents: contentCollection,
    engagementCount: engagementCountCollection,
  } = await getCollection();

  const limit = 10;
  let skip = 0;

  const page = url.searchParams.get('page');
  const userId = url.searchParams.get('userId');
  const searchText = url.searchParams.get('searchText');
  const searchClass = url.searchParams.get('searchClass');
  const searchSubject = url.searchParams.get('searchSubject');
  const searchCategory = url.searchParams.get('searchCategory');

  const query: any = { visibility: 'publish' };

  if (searchText) {
    const pattern = new RegExp(searchText, 'i');
    (query.$or ??= []).push(
      ...[
        { title: pattern },
        { description: pattern },
        { yearOfPublish: searchText },
        { publisherName: pattern },
        { hashtag: pattern },
        { hashtag: new RegExp(searchText.replace(/[_]/g, ' '), 'i') },
      ]
    );
  }

  if (searchClass) {
    (query.$or ??= []).push({ hashtag: searchClass });
  }

  if (searchSubject) {
    (query.$or ??= []).push({ hashtag: searchSubject });
  }

  const sort: any = { _id: -1 };

  let contentId: any[] = [];
  if (searchCategory) {
    if (searchCategory === 'hot') {
      const engagements = await engagementCountCollection.aggregate([
        {
          $sort: {
            downvote: -1,
            upvote: -1,
          },
        },
        {
          $skip: skip,
        },
        {
          $limit: limit,
        },
      ]);

      contentId = engagements.map((engagement: any) => engagement.contentId);

      if (searchCategory === 'hot') {
        query._id = { $in: contentId };
      }

      query.createdAt = {
        $gte: DateTime.local().minus({ hour: 24 }).toJSDate(),
      };
    }

    if (searchCategory === 'hot' || searchCategory === 'most') {
      const engagements = await engagementCountCollection.aggregate([
        {
          $sort: {
            downvote: -1,
            upvote: -1,
          },
        },
        {
          $skip: skip,
        },
        {
          $limit: limit,
        },
      ]);

      contentId = engagements.map((engagement: any) => engagement.contentId);

      if (searchCategory === 'hot') {
        query._id = { $in: contentId };
      }

      query.createdAt = {
        $gte: DateTime.local().minus({ hour: 24 }).toJSDate(),
      };

      console.log(query);
    }
  }

  if (Number(page) > 1) {
    skip = Number(page) * 10;
  }

  const contents = await contentCollection.aggregate([
    {
      $match: query,
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
        upvoteCount: { $ifNull: ['$engagementsCount.upvote', 0] },
        downvoteCount: { $ifNull: ['$engagementsCount.downvote', 0] },
        upvote: { $cond: [{ $ifNull: ['$upvote', false] }, true, false] },
        downvote: { $cond: [{ $ifNull: ['$downvote', false] }, true, false] },
      },
    },
  ]);

  return json(contents);
}
