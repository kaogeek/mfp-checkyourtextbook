import { Configs } from '$environment';
import db from './db';

async function getCollection() {
  return {
    users: db.collection(Configs.COLLECTION_NAME.USER),
    subjects: db.collection(Configs.COLLECTION_NAME.SUBJECT),
    primaryClass: db.collection(Configs.COLLECTION_NAME.CLASS),
    secondaryClass: db.collection(Configs.COLLECTION_NAME.CLASS),
    contents: db.collection(Configs.COLLECTION_NAME.CONTENT),
    engagements: db.collection(Configs.COLLECTION_NAME.ENGAGEMENT),
    engagementCount: db.collection(Configs.COLLECTION_NAME.ENGAGEMENT_COUNT),
    hashtags: db.collection(Configs.COLLECTION_NAME.HASHTAG),
  };
}

export default getCollection;
