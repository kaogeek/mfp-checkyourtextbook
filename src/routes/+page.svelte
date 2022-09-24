<script lang="ts">
  import InfiniteLoading, { type InfiniteEvent } from 'svelte-infinite-loading';
  import {
    SwiperSubject,
    GridContent,
    Searcher,
    Submenu,
  } from '$ui/components';
  import { Heading, P } from 'flowbite-svelte';
  import { Environments } from '$environment';
  import type { ContentGrid, Subject } from '$models';
  import apiCall, { Endpoints } from '$core/functions/call';
  import {
    contentStore,
    searchCategory,
    searchClassStore,
    searchStore,
    searchSubjectStore,
  } from '$core';
  import { onMount } from 'svelte';

  let page = 1;
  let contents: ContentGrid[] = [];
  let search = {
    searchText: '',
    searchClass: '',
    searchSubject: '',
    searchCategory: '',
  };
  let initialSearch: boolean = false;
  let infiniteEventCustom: InfiniteEvent;

  export let data: {
    subjects: Subject[];
  };

  async function loadNew() {
    if (initialSearch && infiniteEventCustom) {
      page = 1;
      infiniteEventCustom.detail.reset();
      infiniteHandler(infiniteEventCustom);
    }
  }

  onMount(() => {
    searchClassStore.subscribe(async (value) => {
      search.searchClass = value;
      await loadNew();
    });

    searchSubjectStore.subscribe(async (value) => {
      search.searchSubject = value;
      await loadNew();
    });

    searchCategory.subscribe(async (value) => {
      search.searchCategory = value;
      await loadNew();
    });

    searchStore.subscribe(async (value) => {
      search.searchText = value;
      await loadNew();
    });

    contentStore.subscribe(async (value: any) => {
      const index = contents.findIndex(({ _id }) => _id === value._id);
      if (index > -1) {
        contents[index] = value;
      } else {
        if (Object.values(value).length) await loadNew();
      }
    });
  });

  async function loadData(): Promise<ContentGrid[]> {
    const userId = localStorage.getItem('userId');

    return apiCall(fetch, Endpoints.getContent, {
      method: 'GET',
      pathParams: [
        `?page=${page}${
          search.searchText ? `&searchText=${search.searchText}` : ''
        }${userId ? `&userId=${userId}` : ''}${
          search.searchClass ? `&searchClass=${search.searchClass}` : ''
        }${
          search.searchSubject ? `&searchSubject=${search.searchSubject}` : ''
        }${
          search.searchCategory
            ? `&searchCategory=${search.searchCategory}`
            : ''
        }`,
      ],
    });
  }

  async function infiniteHandler(infiniteEvent: InfiniteEvent) {
    infiniteEventCustom = infiniteEvent;
    const contentsReps = await loadData();

    if (page === 1) contents = [];

    page += 1;

    if (!contentsReps.length) {
      infiniteEvent.detail.complete();
    }
    contents = [
      ...contents,
      ...contentsReps.filter((content) => {
        const findContent = contents.find(
          (newContent) => newContent._id === content._id
        );
        if (findContent) return false;
        return true;
      }),
    ];

    infiniteEvent.detail.loaded();

    if (!initialSearch) initialSearch = true;
  }
</script>

<svelte:head>
  <title>{Environments.APP_TITLE}</title>
</svelte:head>

<section class="px-0 sm:px-4">
  <Searcher />
</section>

<section class="px-4 sm:px-4 mb-5 text-center">
  <div class="mt-5">
    <Submenu />
  </div>
  <div class="mt-5">
    <SwiperSubject items={data.subjects} />
  </div>

  <div class="mt-5">
    <Heading customSize="" tag="h4" class="mb-2">ช่วยกันตรวจความบ้ง</Heading>
    <P
      class="mb-8"
      align="center"
      size="sm"
      space="normal"
      weight="light"
      opacity={1}>บ้ง ไม่บ้งยังไง มาช่วยกันบอก</P
    >
  </div>
  <GridContent bind:items={contents} />
  <InfiniteLoading on:infinite={infiniteHandler} />
</section>

<style>
</style>
