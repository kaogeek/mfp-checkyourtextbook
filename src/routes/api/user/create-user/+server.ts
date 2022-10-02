import getCollection from "$core/functions/collection";
import { json } from "@sveltejs/kit";

export async function POST({ request }: { request: Request }) {
  const body = await request.json();

  const { users: userCollection } = await getCollection();

  let user = await userCollection.findOne(
    {
      clientUUID: body.clientUUID,
      aliasName: body.name,
    },
    {
      projection: {
        _id: 1,
        aliasName: 1,
      },
    }
  );

  if (!user) {
    const insert = await userCollection.insertOne({
      aliasName: body.name,
      clientType: "general",
      clientUUID: body.clientUUID,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    user = {
      _id: insert.insertedId,
      aliasName: body.name,
    };
  }

  return json({ user });
}
