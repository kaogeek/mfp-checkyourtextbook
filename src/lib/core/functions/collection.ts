import { Configs } from '$environment';
import db from './db';

async function getCollection() {
  return {
    users: db.collection(Configs.COLLECTION_NAME.USER),
    subjects: db.collection(Configs.COLLECTION_NAME.SUBJECT),
    contents: db.collection(Configs.COLLECTION_NAME.CONTENT),
    engagements: db.collection(Configs.COLLECTION_NAME.ENGAGEMENT),
  };
}

export default getCollection;
