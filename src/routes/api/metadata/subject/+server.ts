import getCollection from '$core/functions/collection';
import { json } from '@sveltejs/kit';

export async function GET() {
  const { subjects: subjectCollection } = await getCollection();

  const subjects = await subjectCollection.find(
    {},
    {
      sort: { name: 1 },
    }
  );

  return json(subjects);
}
