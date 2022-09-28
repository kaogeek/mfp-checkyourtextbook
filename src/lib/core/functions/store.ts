import { writable } from 'svelte/store';

export const searchStore = writable('');
export const searchClassStore = writable('');
export const searchSubjectStore = writable('');
export const searchCategory = writable('');

export const contentStore = writable({});
export const userStore = writable({});
export const modalVote = writable(false);
