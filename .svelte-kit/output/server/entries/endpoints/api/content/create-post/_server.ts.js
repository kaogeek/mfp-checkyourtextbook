import { g as getCollection } from '../../../../../chunks/collection.js';
import { j as json } from '../../../../../chunks/index2.js';
import ImageKit from 'imagekit';
import 'mongodb';

new ImageKit({
  publicKey: "public_rBU1IY3QL88yvGeQBRyth9lmyrw=",
  privateKey: "private_DptTodq/O3******************",
  urlEndpoint: "https://ik.imagekit.io/wv8lvlw5m"
});
async function POST({ request }) {
  console.log(request);
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
  body.hashtag.map((hashtag) => {
    return {
      name: hashtag,
      slug: hashtag.replace(/\s/g, "_"),
      visibility: "publish",
      createdAt: new Date(),
      updatedAt: new Date()
    };
  });
  return json({});
}

export { POST };
