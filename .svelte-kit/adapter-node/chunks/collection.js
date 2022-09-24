import { d as db, C as Configs } from './db.js';

async function getCollection() {
  return {
    users: db.collection(Configs.COLLECTION_NAME.USER),
    subjects: db.collection(Configs.COLLECTION_NAME.SUBJECT),
    primaryClass: db.collection(Configs.COLLECTION_NAME.CLASS),
    secondaryClass: db.collection(Configs.COLLECTION_NAME.CLASS),
    contents: db.collection(Configs.COLLECTION_NAME.CONTENT),
    engagements: db.collection(Configs.COLLECTION_NAME.ENGAGEMENT),
    hashtags: db.collection(Configs.COLLECTION_NAME.HASHTAG)
  };
}

export { getCollection as g };
