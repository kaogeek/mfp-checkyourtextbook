import { Repositories } from '$core';

export const prerender = true;

export const load = async () => {
  const account = await Repositories.findAccount();
  return {
    payload: account,
  };
};
