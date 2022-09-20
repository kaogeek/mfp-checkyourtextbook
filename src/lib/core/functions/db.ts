import { Credentials, App } from 'realm-web';
import { Environments } from '$environment';
import { HttpException } from '$utils';

if (
  !Environments.REALM_APP_ID ||
  !Environments.REALM_API_KEY ||
  !Environments.REALM_CLUSTER_NAME ||
  !Environments.REALM_DB_NAME
) {
  throw new Error('Please add your MongoRealm to .env');
}

const app = new App({ id: Environments.REALM_APP_ID });

const logIn = await app
  .logIn(Credentials.apiKey(Environments.REALM_API_KEY))
  .catch(() => {
    throw new HttpException('500');
  });

const client: Realm.Services.MongoDB = logIn.mongoClient(
  Environments.REALM_CLUSTER_NAME
);

const db: Realm.Services.MongoDBDatabase = client.db(
  Environments.REALM_DB_NAME
);

export default db;
