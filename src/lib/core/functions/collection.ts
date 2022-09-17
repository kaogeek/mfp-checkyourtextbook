import { Configs } from '$environment';
import db from './db';

async function getCollection() {
  return {
    subjects: db.collection(Configs.COLLECTION_NAME.SUBJECT),
    contents: db.collection(Configs.COLLECTION_NAME.CONTENT),
  };
}

export default getCollection;
