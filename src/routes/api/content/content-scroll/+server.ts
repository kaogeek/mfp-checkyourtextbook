import getCollection from '$core/functions/collection';
import { json } from '@sveltejs/kit';

export async function GET({ url }: { url: URL }) {
  const limit = 10;
  let skip = 0;

  const page = url.searchParams.get('page');
  if (page) {
    skip = Number(page) * 10;
  }
  const { contents: subjectCollection } = await getCollection();

  const contents = await subjectCollection.aggregate([
    {
      $match: {
        visibility: 'publish',
      },
    },
    {
      $sort: { _id: -1 },
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
      },
    },
    {
      $lookup: {
        from: 'engagementCount',
        localField: '_id',
        foreignField: 'contentId',
        as: 'engagements',
      },
    },
    {
      $unwind: {
        path: '$engagements',
        preserveNullAndEmptyArrays: true,
      },
    },
    {
      $project: {
        title: 1,
        description: 1,
        photo: 1,
        upvote: { $ifNull: ['$engagements.upvote', 0] },
        downvote: { $ifNull: ['$engagements.downvote', 0] },
      },
    },
  ]);

  return json(contents);
}
