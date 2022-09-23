import { g as getCollection } from '../../../../../chunks/collection.js';
import { j as json } from '../../../../../chunks/index2.js';

async function GET() {
  const { subjects: subjectCollection } = await getCollection();
  const subjects = await subjectCollection.find(
    {},
    {
      sort: { name: 1 }
    }
  );
  return json(subjects);
}

export { GET };
