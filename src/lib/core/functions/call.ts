import { HttpException } from "$utils";

export enum Endpoints {
  createContent = "/api/content/create-post",
  getRecomTag = "/api/content/get-recom-tag",
  getTagSearch = "/api/content/get-tag-search",
  getContent = "/api/content/get-post",
  getPrimaryClass = "/api/metadata/primary-class",
  getSecondaryClass = "/api/metadata/secondary-class",
  getSubject = "/api/metadata/subject",
  getUserById = "/api/user/get-user-id",
  createUser = "/api/user/create-user",
  createEngagementComment = "/api/content/create-engagement-comment",
  createEngagementLike = "/api/content/create-engagement-like",
  getEngagementComment = "/api/content/get-engagement-comment",
  createReporting = "/api/reporting/create-reporting",
}

type Props = {
  body?: any;
  method?: "GET" | "POST" | "PUT" | "DELETE";
  pathParams?: (string | number | null)[];
};

export function getLink(
  endpoint: Endpoints,
  pathParams?: (string | number | null)[]
) {
  return pathParams?.length ? `${endpoint}/${pathParams.join("/")}` : endpoint;
}

export default function apiCall(
  fetch: any,
  endpoint: Endpoints,
  props?: Props
) {
  const { method = "GET", pathParams, ...rest } = props || {};

  return fetch(getLink(endpoint, pathParams), {
    method,
    ...rest,
  })
    .then((response: Response) => {
      return response.json();
    })
    .catch(() => {
      throw new HttpException("400");
    });
}
