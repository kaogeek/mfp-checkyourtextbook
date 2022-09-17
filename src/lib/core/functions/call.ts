import { HttpException } from '$utils';

export enum Endpoints {
  getSubject = '/api/metadata/subject',
  getContent = '/api/content/content-scroll',
}

type Props = {
  body?: BodyInit;
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
  pathParams?: (string | number)[];
};

export function getLink(endpoint: Endpoints, pathParams?: (string | number)[]) {
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
