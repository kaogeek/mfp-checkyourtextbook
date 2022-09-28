import getCollection from '$core/functions/collection';
import { json } from '@sveltejs/kit';

export async function GET({ url }: { url: URL }) {
  const { hashtags: hashtagCollection } = await getCollection();

  const tag = url.searchParams.get('tag');

  const filters: { [key: string]: any } = {
    $or: [{ name: tag }, { slug: tag }],
  };

  const hashtags = await hashtagCollection.aggregate([
    {
      $match: filters,
    },
    {
      $group: {
        _id: { name: '$name', slug: '$slug' },
        count: { $sum: 1 },
      },
    },

    {
      $project: {
        _id: 0,
        label: '$_id.name',
        value: '$_id.slug',
      },
    },
    {
      $sort: {
        name: 1,
      },
    },
    {
      $limit: 100,
    },
  ]);

  return json(hashtags);
}
