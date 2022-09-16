import type { User } from '$models';

export class Repositories {
	static findAccount(db: Realm.Services.MongoDBDatabase) {
		return db.collection<User>('test-col').find(
			{},
			{
				projection: {
					_id: { $toString: '$_id' },
					test: '$test'
				}
			}
		);
	}
}
