import { d as db, C as Configs } from './db.js';

async function getCollection() {
  return {
    users: db.collection(Configs.COLLECTION_NAME.USER),
    subjects: db.collection(Configs.COLLECTION_NAME.SUBJECT),
    contents: db.collection(Configs.COLLECTION_NAME.CONTENT),
    engagements: db.collection(Configs.COLLECTION_NAME.ENGAGEMENT)
  };
}

export { getCollection as g };
