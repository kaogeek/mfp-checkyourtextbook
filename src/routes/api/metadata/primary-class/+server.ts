import getCollection from '$core/functions/collection';
import { json } from '@sveltejs/kit';

export async function GET() {
  const { primaryClass: classCollection } = await getCollection();

  const primaryClass = await classCollection.aggregate([
    {
      $group: {
        _id: '$primaryClass',
      },
    },
    {
      $project: {
        _id: 0,
        class: '$_id',
      },
    },
    {
      $sort: {
        class: 1,
      },
    },
  ]);

  return json(primaryClass);
}
