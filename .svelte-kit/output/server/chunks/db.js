import { App, Credentials } from 'realm-web';
import { H as HttpException } from './http-code.js';

class Environments {
}
Environments.APP_TITLE = "จับบ้งหนังสือเรียน";
Environments.REALM_APP_ID = "checkyourtextbook-asyek";
Environments.REALM_CLUSTER_NAME = "mongodb-atlas";
Environments.REALM_API_KEY = "6ccWacv2ld2qznCvfdKr4rrr9KnugwYgO54umtm7gESypazQYhjdG6nswarnEx9w";
Environments.REALM_DB_NAME = "dev";
class Configs {
}
Configs.COLLECTION_NAME = {
  USER: "users",
  SUBJECT: "subjects",
  CONTENT: "contents",
  ENGAGEMENT: "engagements",
  CLASS: "classes",
  HASHTAG: "hashtags"
};

if (!Environments.REALM_APP_ID || !Environments.REALM_API_KEY || !Environments.REALM_CLUSTER_NAME || !Environments.REALM_DB_NAME) {
  throw new Error("Please add your MongoRealm to .env");
}
const app = new App({ id: Environments.REALM_APP_ID });
const logIn = await app.logIn(Credentials.apiKey(Environments.REALM_API_KEY)).catch(() => {
  throw new HttpException("500");
});
const client = logIn.mongoClient(
  Environments.REALM_CLUSTER_NAME
);
const db = client.db(
  Environments.REALM_DB_NAME
);

export { Configs as C, Environments as E, db as d };
