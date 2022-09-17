import type { ObjectId } from 'mongodb';

export interface Content {
  _id: ObjectId;
  title: string;
  description: string;
  photo: {
    url: string;
    size: string;
  };
  yearOfPublish: string;
  publisherName: string;
  userId: ObjectId;
  hashTag: string[];
  visibility: string;
}

export interface ContentGrid {
  _id: ObjectId;
  title: string;
  description: string;
  photo: {
    url: string;
    size: string;
  };
  upvote: number;
  downvote: number;
}
