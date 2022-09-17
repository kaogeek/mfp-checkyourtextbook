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

  const api = 'https://hn.algolia.com/api/v1/search_by_date?tags=story';

  let page = 1;
  let items: ContentGrid[] = [];

  let imageRd = [
    'https://i.ytimg.com/vi/aILNohZZJSs/maxresdefault.jpg',
    'https://pbs.twimg.com/media/ElABjdUWAAEEhA-.jpg',
    'https://storage-wp.thaipost.net/2021/10/%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%A7%E0%B8%B4%E0%B8%95%E0%B8%A3-%E0%B8%A7%E0%B8%87%E0%B8%A9%E0%B9%8C%E0%B8%AA%E0%B8%B8%E0%B8%A7%E0%B8%A3%E0%B8%A3%E0%B8%93-%E0%B8%9E%E0%B8%A5.%E0%B8%AD-170264.jpg',
    'https://img.pptvhd36.com/thumbor/2020/07/31/news-3d2daa9f7e.jpg',
  ];

  export let data: {
    subjects: Subject[];
  };

  async function infiniteHandler({
    detail: { loaded, complete },
  }: InfiniteEvent) {
    const contents = await apiCall(fetch, Endpoints.getContent, {
      method: 'GET',
      pathParams: [`?page=${page}`],
    });

    page += 1;

    if (!contents.length) {
      complete();
      return false;
    }

    items = [...items, ...contents];
    loaded();
  }
</script>

<svelte:head>
  <title>{Environments.APP_TITLE}</title>
</svelte:head>

<section>
  <Searcher />
</section>

<section class="mt-8">
  <Submenu />
</section>

<section class="mt-8">
  <SwiperSubject items={data.subjects} />
</section>

<section class="mt-8 text-center">
  <Heading customSize="" tag="h4" class="mb-2">ช่วยกันตรวจสอบความบ้ง</Heading>
  <P
    class="mb-8"
    align="center"
    size="sm"
    space="normal"
    weight="light"
    opacity={1}>ช่วยกันตรวจสอบความบ้งของการศึกษาไทย</P
  >
  <GridContent bind:items />
  <br />
  <InfiniteLoading on:infinite={infiniteHandler} />
</section>

<style>
</style>
