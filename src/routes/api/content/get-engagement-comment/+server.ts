import getCollection from '$core/functions/collection';
import { json } from '@sveltejs/kit';
import { Visibility } from '$models';
import { Aggregation, type SortContent } from '../aggregation';
import { ObjectId } from 'mongodb';

export async function GET({ url }: { url: URL }) {
  const { engagements: engagementCollection } = await getCollection();

  const limit = 10;
  let skip = 0;

  const userId = url.searchParams.get('userId');
  const type = url.searchParams.get('type');
  const page = url.searchParams.get('page');
  const contentId = url.searchParams.get('contentId');

  const filters: { [key: string]: any } = {
    status: type,
    contentId: contentId ? new ObjectId(contentId) : null,
  };

  const sort: SortContent = { _id: -1 };

  if (Number(page) > 1) skip = Number(page) * 10;

  const pipelines = Aggregation.getComments(filters, sort, skip, limit, userId);
  const comments = await engagementCollection.aggregate(pipelines);

  return json(comments);
}
