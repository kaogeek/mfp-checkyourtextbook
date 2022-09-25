import getCollection from '$core/functions/collection';
import { Visibility } from '$models';
import { json } from '@sveltejs/kit';
import { ObjectId } from 'mongodb';
import { Aggregation } from '../aggregation';

import AWS from 'aws-sdk';

const BUCKET = import.meta.env.VITE_AWS_BUCKET;

const s3 = new AWS.S3({
  accessKeyId: import.meta.env.VITE_AWS_ACCESS_KEY,
  secretAccessKey: import.meta.env.VITE_AWS_SECRET_KEY,
});

export async function POST({ request }: { request: Request }) {
  const { photo, name, ...body } = await request.json();

  const {
    users: userCollection,
    contents: contentCollection,
    hashtags: hashtagCollection,
  } = await getCollection();

  let user = await userCollection.findOne({ aliasName: name });

  if (!user) {
    const insert = await userCollection.insertOne({
      aliasName: name,
      clientType: 'general',
      clientUUID: crypto.randomUUID(),
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    user = {
      _id: insert.insertedId,
      aliasName: name,
    };
  }

  const replacePrefix = photo.base64.replace(/^data:\w+\/\w+;base64,/, '');

  const [fileType] = photo.base64.match(/[^:/]\w+(?=;|,)/);

  const buffer = Buffer.from(replacePrefix, 'base64');

  const pathFile = `${user._id}/${Date.now().toString()}.${fileType}`;
  const uploadedImage = await s3
    .upload({
      Bucket: BUCKET,
      Key: pathFile,
      Body: buffer,
    })
    .promise();

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
        url: uploadedImage.Location,
        size: photo.size,
      },
      hashtag: body.hashtag.map((hashtag: string) =>
        hashtag.replace(/\s/g, '_')
      ),
      userId: new ObjectId(user._id),
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
