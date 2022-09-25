import getCollection from '$core/functions/collection';
import { Visibility } from '$models';
import { json } from '@sveltejs/kit';
import { ObjectId } from 'mongodb';
import { Aggregation } from '../aggregation';

export async function POST({ request }: { request: Request }) {
  const body = await request.json();

  const { engagements: engagementCollection } = await getCollection();

  const engagement = await engagementCollection.findOne({
    commentId: new ObjectId(body.commentId),
    userId: new ObjectId(body.userId),
  });

  if (!engagement)
    await engagementCollection.insertOne({
      status: body.status,
      contentId: new ObjectId(body.contentId),
      commentId: new ObjectId(body.commentId),
      userId: new ObjectId(body.userId),
      createdAt: new Date(),
      updatedAt: new Date(),
    });

  const pipelines = Aggregation.getComments(
    {
      _id: new ObjectId(body.commentId),
    },
    { _id: -1 },
    0,
    10,
    body.userId
  );

  const [comment] = await engagementCollection.aggregate(pipelines);

  return json({
    comment,
  });
}
