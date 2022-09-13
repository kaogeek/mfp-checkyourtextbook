<script lang="ts">
  // import type { User } from '$models';
  import InfiniteLoading from 'svelte-infinite-loading';

  import {
    Swiper,
    GridContent,
    Searcher,
    Submenu,
    ModalCreate,
  } from '$ui/components';
  import { Heading, P } from 'flowbite-svelte';

  // export let data: { payload: User[] };
  // export let errors: any;

  let imageRd = [
    'https://i.ytimg.com/vi/aILNohZZJSs/maxresdefault.jpg',
    'https://pbs.twimg.com/media/ElABjdUWAAEEhA-.jpg',
    'https://storage-wp.thaipost.net/2021/10/%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%A7%E0%B8%B4%E0%B8%95%E0%B8%A3-%E0%B8%A7%E0%B8%87%E0%B8%A9%E0%B9%8C%E0%B8%AA%E0%B8%B8%E0%B8%A7%E0%B8%A3%E0%B8%A3%E0%B8%93-%E0%B8%9E%E0%B8%A5.%E0%B8%AD-170264.jpg',
    'https://img.pptvhd36.com/thumbor/2020/07/31/news-3d2daa9f7e.jpg',
  ];

  // $: items = [
  //   ...Array.from({ length: 20 }, (_, index) => {
  //     return {
  //       id: index,
  //       img: imageRd[
  //         Math.round(Math.floor(Math.random() * (imageRd.length - 0 + 0) + 0))
  //       ],
  //       title: 'ทำไมไม่มีเรื่องรัฐประหารในหนังสือประวัติศาสตร์ไทย',
  //     };
  //   }),
  // ];

  const api = 'https://hn.algolia.com/api/v1/search_by_date?tags=story';

  let page = 1;
  let items: any[] = [];

  function infiniteHandler({
    detail: { loaded, complete },
  }: {
    detail: {
      loaded: any;
      complete: any;
    };
  }) {
    fetch(`${api}&page=${page}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.hits.length) {
          page += 1;
          items = [
            ...items,
            ...data.hits.map((e: any, index: number) => {
              return {
                id: items.length + index,
                img: imageRd[
                  Math.round(
                    Math.floor(Math.random() * (imageRd.length - 0 + 0) + 0)
                  )
                ],
                title: 'ทำไมไม่มีเรื่องรัฐประหารในหนังสือประวัติศาสตร์ไทย',
              };
            }),
          ];

          loaded();
        } else {
          complete();
        }
      });
  }
</script>

<svelte:head>
  <title>หน้าหลัก</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
  <Searcher />
</section>

<section class="mt-8">
  <Submenu />
</section>

<section class="mt-8">
  <Swiper />
</section>

<section class="mt-8 text-center">
  <Heading customSize="" tag="h4" class="mb-2">ช่วยกันตรวจสอบความบ้ง</Heading>
  <P
    class="mb-8"
    align="center"
    size="sm"
    space="normal"
    weight="medium"
    opacity={1}>ช่วยกันตรวจสอบความบ้งของการศึกษาไทย</P
  >
  <GridContent bind:items />

  <InfiniteLoading on:infinite={infiniteHandler} />
</section>

<style>
</style>
