import getCollection from '$core/functions/collection';
import { json } from '@sveltejs/kit';

export async function GET() {
  const { secondaryClass: classCollection } = await getCollection();

  const secondaryClass = await classCollection.aggregate([
    {
      $group: {
        _id: '$secondaryClass',
      },
    },
    {
      $project: {
        _id: 0,
        name: '$_id',
      },
    },
    {
      $sort: {
        name: 1,
      },
    },
  ]);

  return json(secondaryClass);
}
