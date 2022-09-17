import type { LoadEvent } from '@sveltejs/kit';
import { HttpException } from '$utils';
import apiCall, { Endpoints } from '$core/functions/call';
import type { Subject } from '$models';
export const prerender = true;

export const load = async ({ params, fetch }: LoadEvent) => {
  try {
    const subjects: Subject[] = await apiCall(fetch, Endpoints.getSubject, {
      method: 'GET',
    });

    return {
      subjects,
    };
  } catch (error) {
    throw new HttpException('400');
  }
};
