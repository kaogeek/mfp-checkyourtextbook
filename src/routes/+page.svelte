<script lang="ts">
  import InfiniteLoading, { type InfiniteEvent } from 'svelte-infinite-loading';
  import {
    SwiperSubject,
    GridContent,
    Searcher,
    Submenu,
    ModalCreate,
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
  import { fade } from 'svelte/transition';

  let isOpenModalCreate: boolean = false;

  export let subjects: Subject[];

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

  async function loadNew() {
    if (initialSearch && infiniteEventCustom) {
      page = 1;
      infiniteEventCustom.detail.reset();
      infiniteHandler(infiniteEventCustom);
    }
  }

  onMount(async () => {
    subjects = await apiCall(fetch, Endpoints.getSubject, {
      method: 'GET',
    });

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

  async function loadContents(): Promise<ContentGrid[]> {
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
    const contentsReps = await loadContents();

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

<section class="text-center mt-5 sm:hidden">
  <button
    type="button"
    class="mx-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-normal rounded-lg text-sm px-5 py-3 text-center"
    on:click={() => {
      isOpenModalCreate = true;
    }}>รายงานความบ้ง</button
  >
</section>

<section class="px-4 sm:px-4 {contents.length ? 'mb-5' : 'mb-16'} text-center">
  <div class="mt-5">
    <Submenu />
  </div>
  <div in:fade class="mt-5">
    <SwiperSubject items={subjects} />
  </div>

  <div class="mt-5">
    <Heading customSize="" tag="h4" class="mb-1.5">ช่วยกันตรวจความบ้ง</Heading>
    <Heading customSize="text-[16px]" tag="h6" class="mb-10 font-light"
      >บ้ง ไม่บ้งยังไง มาช่วยกันบอก</Heading
    >
  </div>
  <GridContent bind:items={contents} />
  <br />
  <InfiniteLoading on:infinite={infiniteHandler} />
</section>

{#if isOpenModalCreate}
  <ModalCreate bind:isOpenModalCreate />
{/if}
