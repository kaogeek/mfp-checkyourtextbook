import getCollection from '$core/functions/collection';
import { json } from '@sveltejs/kit';

export async function GET() {
  const { primaryClass: classCollection } = await getCollection();

  const primaryClass = await classCollection.aggregate([
    {
      $group: {
        _id: '$primaryClass',
        seqPrimary: { $last: '$seqPrimary' },
      },
    },
    {
      $project: {
        _id: 0,
        name: '$_id',
        seq: '$seqPrimary',
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
