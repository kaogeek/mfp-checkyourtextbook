import type { User } from '$models';
import { connect } from './db';

const db: Realm.Services.MongoDBDatabase = await connect();

export class Repositories {
  static findAccount(): Promise<User[]> {
    return db.collection('test-col').find();
  }
}
