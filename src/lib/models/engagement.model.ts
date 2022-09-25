export interface EngagementComment {
  _id: string;
  contentId: string;
  status: string;
  author: string;
  reason: string;
  createdAt: Date;
  dislike: boolean;
  dislikeCount: number;
  like: boolean;
  likeCount: number;
}
