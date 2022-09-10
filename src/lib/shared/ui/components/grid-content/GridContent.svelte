<script lang="ts">
  import { Img, P } from 'flowbite-svelte';
  import Masonry from 'svelte-bricks';
  import { ModalDetail } from '../modal';

  let imageRd = [
    'https://i.ytimg.com/vi/aILNohZZJSs/maxresdefault.jpg',
    'https://pbs.twimg.com/media/ElABjdUWAAEEhA-.jpg',
    'https://storage-wp.thaipost.net/2021/10/%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%A7%E0%B8%B4%E0%B8%95%E0%B8%A3-%E0%B8%A7%E0%B8%87%E0%B8%A9%E0%B9%8C%E0%B8%AA%E0%B8%B8%E0%B8%A7%E0%B8%A3%E0%B8%A3%E0%B8%93-%E0%B8%9E%E0%B8%A5.%E0%B8%AD-170264.jpg',
    'https://img.pptvhd36.com/thumbor/2020/07/31/news-3d2daa9f7e.jpg',
  ];

  $: items = [
    ...Array.from({ length: 20 }, (_, index) => {
      return {
        id: index,
        img: imageRd[
          Math.round(Math.floor(Math.random() * (imageRd.length - 0 + 0) + 0))
        ],
        title: 'ทำไมไม่มีเรื่องรัฐประหารในหนังสือประวัติศาสตร์ไทย',
      };
    }),
  ];

  let isOpenModal: boolean;
</script>

<Masonry
  {items}
  let:item
  minColWidth={300}
  maxColWidth={330}
  gap={5}
  duration={100}
>
  <section
    on:click={() => (isOpenModal = true)}
    class="cursor-pointer rounded-lg p-2"
  >
    <Img src={item.img} class="rounded-lg mb-2" alt={item.title} />
    <P align="left" size="xs" space="normal" weight="medium" opacity={1}
      >{item.title}</P
    >
  </section>
</Masonry>

<ModalDetail bind:isOpenModal />

<style>
</style>
