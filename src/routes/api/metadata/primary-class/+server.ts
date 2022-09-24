import getCollection from '$core/functions/collection';
import { json } from '@sveltejs/kit';

export async function GET() {
  const { primaryClass: classCollection } = await getCollection();

  const primaryClass = await classCollection.aggregate([
    {
      $group: {
        _id: '$primaryClass',
        primaryNo: { $last: '$primaryNo' },
      },
    },
    {
      $project: {
        _id: 0,
        name: '$_id',
        seq: '$primaryNo',
      },
    },
    {
      $sort: {
        seq: 1,
      },
    },
  ]);

  return json(primaryClass);
}
