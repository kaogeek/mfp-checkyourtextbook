import getCollection from '$core/functions/collection';
import { json } from '@sveltejs/kit';

export async function GET({ url }: { url: URL }) {
  const name = url.searchParams.get('userId') ?? null;
  const { users: userCollection } = await getCollection();

  const user = await userCollection.findOne(
    {
      clientUUID: name,
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
