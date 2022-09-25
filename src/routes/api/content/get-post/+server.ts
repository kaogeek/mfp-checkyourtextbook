import getCollection from '$core/functions/collection';
import { json } from '@sveltejs/kit';
import { ObjectId } from 'mongodb';
import { DateTime } from 'luxon';
import { Category, Visibility } from '$models';
import { Aggregation, type SortContent } from '../aggregation';

export async function GET({ url }: { url: URL }) {
  const {
    contents: contentCollection,
    engagementCount: engagementCountCollection,
  } = await getCollection();

  let limit = 10;
  let skip = 0;

  const page = url.searchParams.get('page');
  const userId = url.searchParams.get('userId');
  const searchText = url.searchParams.get('searchText');
  const searchClass = url.searchParams.get('searchClass');
  const searchSubject = url.searchParams.get('searchSubject');
  const searchCategory = url.searchParams.get('searchCategory');
  const hashtag = url.searchParams.get('hashtag');
  const exclude = url.searchParams.get('exclude');

  const filters: { [key: string]: any } = { visibility: Visibility.PUBLISH };
  const sort: SortContent = { _id: -1 };
  if (hashtag) {
    filters.hashtag = { $in: hashtag.split(',') };
  }

  if (exclude) {
    filters._id = { $ne: new ObjectId(exclude) };
  }

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

  let sortMore: SortContent = {};

  if (searchCategory) {
    if (searchCategory === Category.MOST || searchCategory === Category.HOT) {
      sortMore = { voteTotal: -1, _id: -1 };

      if (searchCategory === Category.HOT) {
        const engagements = await engagementCountCollection.aggregate([
          {
            $sort: {
              downvote: -1,
              upvote: -1,
              _id: -1,
            },
          },
          {
            $skip: skip,
          },
          {
            $limit: 1000,
          },
        ]);

        const contentId: ObjectId[] = engagements.map(
          (engagement: any) => engagement.contentId
        );

        if (engagements) {
          filters._id = { $in: contentId };
        }

        filters.createdAt = {
          $gte: DateTime.local().minus({ days: 1 }).toJSDate(),
        };
      }
    }
  }

  if (!page) {
    limit = 1;
  }

  if (Number(page) > 1) skip = Number(page) * 10;

  const pipelines = Aggregation.getContents(
    filters,
    sort,
    skip,
    limit,
    userId,
    sortMore
  );

  const contents = await contentCollection.aggregate(pipelines);

  return json(contents);
}
