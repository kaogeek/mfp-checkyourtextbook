import { g as getCollection } from '../../../../../chunks/collection.js';
import { j as json } from '../../../../../chunks/index2.js';

async function GET() {
  const { secondaryClass: classCollection } = await getCollection();
  const secondaryClass = await classCollection.aggregate([
    {
      $group: {
        _id: "$secondaryClass"
      }
    },
    {
      $project: {
        _id: 0,
        name: "$_id"
      }
    },
    {
      $sort: {
        name: 1
      }
    }
  ]);
  return json(secondaryClass);
}

export { GET };
