<script lang="ts">
  import { LazyImage } from 'svelte-lazy-image';
  import { Img, P } from 'flowbite-svelte';
  import Masonry from 'svelte-bricks';
  import { fade } from 'svelte/transition';
  import { ModalDetail } from '../modal';
  import type { ContentGrid } from '$models';

  import bongIcon from '$assets/vectors/bong.svg';
  import notBongIcon from '$assets/vectors/not-bong.svg';
  import { NumberFormat } from '$utils';

  let isOpenModal: boolean = false;
  let dataModal: ContentGrid;
  export let items: ContentGrid[] = [];

  items = items.map((item, index) => {
    return {
      ...item,
      id: `${item._id}-${index}`,
    };
  });
</script>

<section>
  <Masonry
    let:item
    {items}
    idKey={'_id'}
    minColWidth={280}
    gap={20}
    animate={true}
    duration={500}
  >
    <div
      in:fade
      out:fade
      on:click={() => {
        isOpenModal = true;
        dataModal = item;
      }}
      class="max-w-sm bg-white rounded-2xl shadow-md hover:scale-[1.02] ease-in-out duration-200"
    >
      <LazyImage
        src={item.photo.url}
        class="rounded-t-2xl mb-2 w-full max-h-[500px]"
        placeholder="
        https://via.placeholder.com/{item.photo.size}/cccccc/969696?text=+"
        alt={item.title}
        options={{ threshold: 0.4 }}
      />
      <div class="px-3 py-1">
        <P align="left" size="sm" space="normal" weight="normal" opacity={1}
          >{item.title}</P
        >
      </div>
      <div class="flex m-2 space-x-3 pb-2">
        <div
          class="text-[14px] flex items-center transition duration-150 ease-out px-3 py-2 cursor-pointer rounded-2xl text-zinc-300 hover:bg-gray-100"
        >
          <Img
            src={bongIcon}
            class="w-[1.5rem]"
          />&nbsp;{NumberFormat.formatShort(item.downvote)}
        </div>

        <div
          class="text-[14px] flex items-center transition duration-150 ease-out px-3 py-2 cursor-pointer rounded-2xl text-zinc-300 hover:bg-gray-100"
        >
          <Img
            src={notBongIcon}
            class="w-[1.5rem]"
          />&nbsp;{NumberFormat.formatShort(item.upvote)}
        </div>
      </div>
    </div>
  </Masonry>
</section>

{#if isOpenModal}
  <ModalDetail bind:isOpenModal bind:data={dataModal} />
{/if}

<style>
</style>
