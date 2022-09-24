import { g as getCollection } from '../../../../../chunks/collection.js';
import { j as json } from '../../../../../chunks/index2.js';
import 'mongodb';

async function POST({ request }) {
  const body = await request.json();
  const {
    users: userCollection,
    contents: contentCollection,
    hashtags: hashtagCollection
  } = await getCollection();
  let user = await userCollection.findOne({ aliasName: body.name });
  if (!user) {
    const insert = await userCollection.insertOne({
      aliasName: body.name,
      clientType: "general",
      clientUUID: crypto.randomUUID(),
      createdAt: new Date(),
      updatedAt: new Date()
    });
    user = {
      _id: insert.insertedId,
      aliasName: body.name
    };
  }
  const prepareHashtags = body.hashtag.map((hashtag) => {
    return {
      name: hashtag,
      slug: hashtag.replace(/\s/g, "_"),
      visibility: "publish",
      createdAt: new Date(),
      updatedAt: new Date()
    };
  });
  await Promise.all([
    hashtagCollection.insertMany(prepareHashtags),
    contentCollection.insertOne({
      ...body,
      photo: {
        url: "https://via.placeholder.com/300x120/808080/ffffff?text=+",
        size: body.photo.size
      },
      visibility: "publish",
      createdAt: new Date(),
      updatedAt: new Date()
    })
  ]);
  console.log(body);
  return json({});
}

export { POST };
