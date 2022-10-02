import getCollection from "$core/functions/collection";
import { json } from "@sveltejs/kit";
import { ObjectId } from "mongodb";

export async function POST({ request }: { request: Request }) {
  const body = await request.json();

  const {
    reportings: reportingCollection,
    contents: contentCollection,
    users: userCollection,
  } = await getCollection();

  const content = await contentCollection.findOne({
    _id: new ObjectId(body.content),
    userId: new ObjectId(body.userId),
  });

  if (content) return json({});

  let user = await userCollection.findOne({ aliasName: body.name });

  if (!user) {
    const insert = await userCollection.insertOne({
      aliasName: body.name,
      clientType: "general",
      clientUUID: crypto.randomUUID(),
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    user = {
      _id: insert.insertedId,
      aliasName: body.name,
    };
  }

  const reporting = await reportingCollection.findOne({
    contentId: new ObjectId(body.content),
    userId: new ObjectId(body.userId),
  });

  if (!reporting)
    await reportingCollection.insertOne({
      reason: body.reason,
      message: body.message ? body.message : undefined,
      contentId: new ObjectId(body.contentId),
      userId: new ObjectId(body.userId),
      createdAt: new Date(),
      updatedAt: new Date(),
    });

  return json({
    user,
  });
}
