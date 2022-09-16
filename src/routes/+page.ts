import type { LoadEvent } from '@sveltejs/kit';
export const prerender = true;

export const load = async ({ data }: LoadEvent) => {
	return data;
	// console.log(event);
	// const db = await createConnection();
	// const account = await Repositories.findAccount();
	// return {
	// 	payload: account
	// };
};
