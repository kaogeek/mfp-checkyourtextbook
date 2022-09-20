import { g as getCollection } from '../../../../../chunks/collection.js';
import { j as json } from '../../../../../chunks/index2.js';

async function GET({ url }) {
  const name = url.searchParams.get("name") ?? null;
  const { users: userCollection } = await getCollection();
  const user = await userCollection.findOne(
    {
      aliasName: name
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
