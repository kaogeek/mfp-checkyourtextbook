import getCollection from '$core/functions/collection';
import { json } from '@sveltejs/kit';
import type { ObjectId } from 'mongodb';
import { DateTime } from 'luxon';
import { Category, Visibility } from '$models';
import { Aggregation, type SortContent } from '../aggregation';

export async function GET({ url }: { url: URL }) {
  const {
    contents: contentCollection,
    engagementCount: engagementCountCollection,
  } = await getCollection();

  const limit = 10;
  let skip = 0;

  const page = url.searchParams.get('page');
  const userId = url.searchParams.get('userId');
  const searchText = url.searchParams.get('searchText');
  const searchClass = url.searchParams.get('searchClass');
  const searchSubject = url.searchParams.get('searchSubject');
  const searchCategory = url.searchParams.get('searchCategory');

  const filters: { [key: string]: any } = { visibility: Visibility.PUBLISH };

  if (searchText) {
    const pattern = new RegExp(searchText, 'i');
    (filters.$or ??= []).push(
      ...[
        { title: pattern },
        { description: pattern },
        { yearOfPublish: searchText },
        { publisherName: pattern },
        { hashtag: pattern },
        { hashtag: new RegExp(searchText.replace(/[_]/g, ' '), 'i') },
      ]
    );
  }

  if (searchClass) {
    (filters.$or ??= []).push({ hashtag: searchClass });
  }

  if (searchSubject) {
    (filters.$or ??= []).push({ hashtag: searchSubject });
  }

  const sort: SortContent = { _id: -1 };

  if (searchCategory) {
    if (searchCategory === Category.MOST || searchCategory === Category.HOT) {
      const engagements = await engagementCountCollection.aggregate([
        {
          $sort: {
            downvote: -1,
            upvote: -1,
          },
        },
        {
          $skip: skip,
        },
        {
          $limit: limit,
        },
      ]);

      const contentId: ObjectId[] = engagements.map(
        (engagement: any) => engagement.contentId
      );

      if (engagements) {
        filters._id = { $in: contentId };
      }

      if (searchCategory === Category.HOT) {
        filters.createdAt = {
          $gte: DateTime.local().minus({ days: 15 }).toJSDate(),
        };
      }
    }
  }

  if (Number(page) > 1) skip = Number(page) * 10;

  const pipelines = Aggregation.getContents(filters, sort, skip, limit, userId);
  const contents = await contentCollection.aggregate(pipelines);

  return json(contents);
}
