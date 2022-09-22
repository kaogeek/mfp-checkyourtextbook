import { writable } from 'svelte/store';

export const searchStore = writable('');
export const contentStore = writable({});
export const userStore = writable({});
