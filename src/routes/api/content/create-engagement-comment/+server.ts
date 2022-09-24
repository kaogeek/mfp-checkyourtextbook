import getCollection from '$core/functions/collection';
import { Visibility } from '$models';
import { json } from '@sveltejs/kit';
import { ObjectId } from 'mongodb';
import { Aggregation } from '../aggregation';

export async function POST({ request }: { request: Request }) {
  const body = await request.json();

  const {
    engagements: engagementCollection,
    users: userCollection,
    contents: contentCollection,
  } = await getCollection();

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
  await engagementCollection.insertOne({
    status: body.status,
    contentId: new ObjectId(body.contentId),
    userId: new ObjectId(user._id),
    reason: body.reason,
    createdAt: new Date(),
    updatedAt: new Date(),
  });

  const pipelines = Aggregation.getContents(
    {
      _id: new ObjectId(body.contentId),
      visibility: Visibility.PUBLISH,
    },
    { _id: -1 },
    0,
    10,
    user._id
  );

  const [content] = await contentCollection.aggregate(pipelines);

  return json({
    user,
    content,
  });
}
