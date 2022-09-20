import { H as HttpException } from '../../chunks/http-code.js';

var Endpoints = /* @__PURE__ */ ((Endpoints2) => {
  Endpoints2["getUserById"] = "/api/user/get-user-id";
  Endpoints2["getSubject"] = "/api/metadata/subject";
  Endpoints2["getContent"] = "/api/content/post";
  Endpoints2["postEngagement"] = "/api/content/engagement";
  return Endpoints2;
})(Endpoints || {});
function getLink(endpoint, pathParams) {
  return pathParams?.length ? `${endpoint}/${pathParams.join("/")}` : endpoint;
}
function apiCall(fetch, endpoint, props) {
  const { method = "GET", pathParams, ...rest } = props || {};
  return fetch(getLink(endpoint, pathParams), {
    method,
    ...rest
  }).then((response) => {
    return response.json();
  }).catch(() => {
    throw new HttpException("400");
  });
}

const prerender = true;
const load = async ({ params, fetch }) => {
  try {
    const subjects = await apiCall(fetch, Endpoints.getSubject, {
      method: "GET"
    });
    return {
      subjects
    };
  } catch (error) {
    throw new HttpException("400");
  }
};

export { load, prerender };
