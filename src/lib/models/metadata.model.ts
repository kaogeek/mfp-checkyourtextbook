import type { ObjectId } from 'mongodb';

export interface Subject {
  _id?: ObjectId;
  name: string;
  slug: string;
  thumbnail: string;
  createdAt?: Date;
  updatedAt?: Date;
}
