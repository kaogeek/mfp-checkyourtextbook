import getCollection from '$core/functions/collection';
import { json } from '@sveltejs/kit';

export async function GET() {
  const { secondaryClass: classCollection } = await getCollection();

  const secondaryClass = await classCollection.aggregate([
    {
      $project: {
        _id: 0,
        name: '$secondaryClass',
        seq: '$seqSecondary',
      },
    },
    {
      $sort: {
        seq: 1,
      },
    },
  ]);

  return json(secondaryClass);
}
