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

  let page = 1;
  let items: ContentGrid[] = [];

  export let data: {
    subjects: Subject[];
  };

  async function infiniteHandler({
    detail: { loaded, complete },
  }: InfiniteEvent) {
    const contents = await apiCall(fetch, Endpoints.getContent, {
      method: 'GET',
      pathParams: [
        `?page=${page} ${
          localStorage.getItem('userId')
            ? `&userId=${localStorage.getItem('userId')}`
            : ''
        }`,
      ],
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
