export interface Content {
  _id: string;
  title: string;
  description: string;
  photo: {
    url: string;
    size: string;
  };
  yearOfPublish: string;
  publisherName: string;
  userId: string;
  hashtag: string[];
  visibility: string;
}

export interface ContentGrid {
  _id: string;
  title: string;
  description: string;
  photo: {
    url: string;
    size: string;
  };
  hashtag: string[];
  upvoteCount: number;
  downvoteCount: number;
  upvote: boolean;
  downvote: boolean;
}

export interface GetContentId {
  contentId: string;
}
