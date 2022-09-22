import getCollection from '$core/functions/collection';
import { json } from '@sveltejs/kit';
import { ObjectId } from 'mongodb';

export async function GET({ url }: { url: URL }) {
  const userId = url.searchParams.get('userId') ?? null;
  const { users: userCollection } = await getCollection();

  const user = await userCollection.findOne(
    {
      _id: userId ? new ObjectId(userId) : null,
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
