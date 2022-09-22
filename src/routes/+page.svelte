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
  import { searchStore } from '$core';
  import { onMount } from 'svelte';

  let page = 1;
  let items: ContentGrid[] = [];
  let searchText: string;
  let initialSearch: boolean = false;
  let infiniteEventCustom: InfiniteEvent;

  export let data: {
    subjects: Subject[];
  };

  onMount(() => {
    searchStore.subscribe(async (value) => {
      searchText = value;

      if (initialSearch) {
        page = 1;
        infiniteEventCustom.detail.reset();

        const contents = await loadData();
        items = contents;

        if (!contents.length) {
          infiniteEventCustom.detail.complete();
        }

        infiniteEventCustom.detail.loaded();

        page += 1;
      }
    });
  });

  async function loadData(): Promise<ContentGrid[]> {
    const userId = localStorage.getItem('userId');
    return apiCall(fetch, Endpoints.getContent, {
      method: 'GET',
      pathParams: [
        `?page=${page}${searchText ? `&search=${searchText}` : ''}${
          userId ? `&userId=${userId}` : ''
        }`,
      ],
    });
  }

  async function infiniteHandler(infiniteEvent: InfiniteEvent) {
    infiniteEventCustom = infiniteEvent;
    const contents = await loadData();

    page += 1;

    if (!contents.length) {
      infiniteEvent.detail.complete();
    }

    items = [...items, ...contents];
    infiniteEvent.detail.loaded();

    if (!initialSearch) initialSearch = true;
  }
</script>

<svelte:head>
  <title>{Environments.APP_TITLE}</title>
</svelte:head>

<section>
  <Searcher />
</section>

<section class="mt-5">
  <Submenu />
</section>

<section class="mt-5">
  <SwiperSubject items={data.subjects} />
</section>

<section class="mt-5 text-center">
  <Heading customSize="" tag="h4" class="mb-2">ช่วยกันตรวจความบ้ง</Heading>
  <P
    class="mb-8"
    align="center"
    size="sm"
    space="normal"
    weight="light"
    opacity={1}>บ้ง ไม่บ้งยังไง มาช่วยกันบอก</P
  >
  <GridContent bind:items />
  <InfiniteLoading on:infinite={infiniteHandler} distance={200} />
</section>

<style>
</style>
