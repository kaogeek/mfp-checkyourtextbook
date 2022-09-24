import { g as getCollection } from '../../../../../chunks/collection.js';
import { j as json } from '../../../../../chunks/index2.js';

async function GET() {
  const { primaryClass: classCollection } = await getCollection();
  const primaryClass = await classCollection.aggregate([
    {
      $group: {
        _id: "$primaryClass"
      }
    },
    {
      $project: {
        _id: 0,
        class: "$_id"
      }
    },
    {
      $sort: {
        class: 1
      }
    }
  ]);
  return json(primaryClass);
}

export { GET };
