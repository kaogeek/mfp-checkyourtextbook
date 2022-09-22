import getCollection from '$core/functions/collection';
import { json } from '@sveltejs/kit';

export async function GET() {
  const { hashtags: hashtagCollection } = await getCollection();

  const hashtags = await hashtagCollection.aggregate([
    {
      $match: {
        visibility: 'publish',
      },
    },
    {
      $group: {
        _id: { name: '$name', slug: '$slug' },
        count: { $sum: 1 },
      },
    },
    {
      $sort: {
        count: -1,
      },
    },
    {
      $project: {
        _id: 0,
        name: '$_id.name',
        slug: '$_id.slug',
      },
    },
    {
      $limit: 5,
    },
  ]);

  return json(hashtags);
}
