import getCollection from '$core/functions/collection';
import { json } from '@sveltejs/kit';
import { ObjectId } from 'mongodb';

export async function POST({ request }: { request: Request }) {
  const body = await request.json();

  const { users: userCollection, contents: contentCollection } =
    await getCollection();

  let user = await userCollection.findOne({ aliasName: body.name });

  if (!user) {
    const insert = await userCollection.insertOne({
      aliasName: body.name,
      clientType: 'general',
      clientUUID: crypto.randomUUID(),
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    user = {
      _id: insert.insertedId,
      aliasName: body.name,
    };
  }

  // await contentCollection.insertOne({
  //   status: body.status,
  //   contentId: new ObjectId(body.contentId),
  //   userId: new ObjectId(user._id),
  //   reason: body.reason,
  // });

  return;
}
