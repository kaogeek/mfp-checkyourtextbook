import getCollection from '$core/functions/collection';
import { json } from '@sveltejs/kit';

export async function GET({ url }: { url: URL }) {
  const name = url.searchParams.get('name') ?? null;
  const { users: userCollection } = await getCollection();

  const user = await userCollection.findOne(
    {
      aliasName: name,
    },
    {
      projection: {
        _id: 1,
        aliasName: 1,
      },
    }
  );



  return json(user);
}
