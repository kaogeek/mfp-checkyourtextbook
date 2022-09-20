import { HttpException } from '$utils';

export enum Endpoints {
  getUserById = '/api/user/get-user-id',
  getSubject = '/api/metadata/subject',
  getContent = '/api/content/post',
  postEngagement = '/api/content/engagement',
}

type Props = {
  body?: any;
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
  pathParams?: (string | number | null)[];
};

export function getLink(
  endpoint: Endpoints,
  pathParams?: (string | number | null)[]
) {
  return pathParams?.length ? `${endpoint}/${pathParams.join('/')}` : endpoint;
}

export default function apiCall(
  fetch: any,
  endpoint: Endpoints,
  props?: Props
) {
  const { method = 'GET', pathParams, ...rest } = props || {};

  return fetch(getLink(endpoint, pathParams), {
    method,
    ...rest,
  })
    .then((response: Response) => {
      return response.json();
    })
    .catch(() => {
      throw new HttpException('400');
    });
}
