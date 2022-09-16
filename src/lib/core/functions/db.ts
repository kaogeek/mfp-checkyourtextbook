import { Credentials, App } from 'realm-web';
import { Environments } from '$environment';
import { HttpException } from '$utils';

const app = new App({ id: Environments.REALM_APP_ID });

export const createConnection = async (): Promise<Realm.Services.MongoDBDatabase> => {
	const user = await app.logIn(Credentials.apiKey(Environments.REALM_API_KEY)).catch(() => {
		throw new HttpException('500');
	});

	return user.mongoClient(Environments.REALM_CLUSTER_NAME).db(Environments.REALM_DB_NAME);
};
