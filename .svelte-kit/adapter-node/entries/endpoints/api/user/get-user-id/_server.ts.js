import { g as getCollection } from '../../../../../chunks/collection.js';
import { j as json } from '../../../../../chunks/index2.js';
import { ObjectId } from 'mongodb';

async function GET({ url }) {
  const userId = url.searchParams.get("userId") ?? null;
  const { users: userCollection } = await getCollection();
  const user = await userCollection.findOne(
    {
      _id: userId ? new ObjectId(userId) : null
    },
    {
      projection: {
        _id: 1,
        aliasName: 1
      }
    }
  );
  return json(user);
}

export { GET };
