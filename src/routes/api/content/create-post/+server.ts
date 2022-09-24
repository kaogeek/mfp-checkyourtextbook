import getCollection from '$core/functions/collection';
import { Visibility } from '$models';
import { json } from '@sveltejs/kit';
import { ObjectId } from 'mongodb';
import { Aggregation } from '../aggregation';

export async function POST({ request }: { request: Request }) {
  const body = await request.json();

  const {
    users: userCollection,
    contents: contentCollection,
    hashtags: hashtagCollection,
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

  const prepareHashtags = body.hashtag.map((hashtag: any) => {
    return {
      name: hashtag,
      slug: hashtag.replace(/\s/g, '_'),
      visibility: Visibility.PUBLISH,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
  });

  const [insert] = await Promise.all([
    contentCollection.insertOne({
      ...body,
      photo: {
        url: `http://placeimg.com/${Math.floor(
          Math.random() * (600 - 300 + 1) + 300
        )}/${Math.floor(Math.random() * (600 - 300 + 1) + 300)}/business`,
        size: body.photo.size,
      },
      hashtag: body.hashtag.map((hashtag: string) =>
        hashtag.replace(/\s/g, '_')
      ),
      visibility: Visibility.PUBLISH,
      createdAt: new Date(),
      updatedAt: new Date(),
    }),
    hashtagCollection.insertMany(prepareHashtags),
  ]);

  const pipelines = Aggregation.getContents(
    {
      _id: new ObjectId(insert.insertedId),
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
