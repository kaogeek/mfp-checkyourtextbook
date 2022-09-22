<script lang="ts">
  import { LazyImage } from 'svelte-lazy-image';
  import { Img, P } from 'flowbite-svelte';
  import Masonry from 'svelte-bricks';
  import { fade } from 'svelte/transition';
  import { ModalDetail, ModalVote } from '../modal';
  import type { ContentGrid } from '$models';

  import bongIcon from '$assets/vectors/bong.svg';
  import notBongIcon from '$assets/vectors/not-bong.svg';
  import bongIconActive from '$assets/vectors/bong-active.svg';
  import notBongIconActive from '$assets/vectors/not-bong-active.svg';
  import { NumberFormat } from '$utils';
  import { onMount } from 'svelte';
  import { contentStore } from '$core';

  let isOpenModal: boolean = false;
  let isOpenModalVote: boolean = false;
  let iconVote: string = '';
  let dataModal: ContentGrid;

  export let items: ContentGrid[] = [];

  onMount(() => {
    contentStore.subscribe((value: any) => {
      const index = items.findIndex(({ _id }) => _id === value._id);
      if (index > -1) items[index] = value;
    });
  });

  async function upvote(item: ContentGrid) {
    iconVote = 'upvote';
    dataModal = item;

    isOpenModalVote = true;
  }

  function downvote(item: ContentGrid) {
    iconVote = 'downvote';
    dataModal = item;

    isOpenModalVote = true;
  }
</script>

<section class="mb-2">
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
      class="max-w-sm bg-white rounded-2xl shadow-md hover:scale-[1.02] ease-in-out duration-200"
    >
      <section
        on:click={() => {
          isOpenModal = true;
          dataModal = item;
        }}
      >
        <LazyImage
          src={item.photo.url}
          class="rounded-t-2xl mb-2 w-full max-h-[500px]"
          placeholder="
  https://via.placeholder.com/{item.photo.size}/cccccc/969696?text=+"
          alt={item.title}
        />
        <div class="px-3 py-1">
          <P align="left" size="sm" space="normal" weight="normal" opacity={1}
            >{item.title}</P
          >
        </div>
      </section>
      <div class="flex m-2 space-x-3 pb-2">
        <div
          on:click={() => downvote(item)}
          class="{item.downvote
            ? 'text-[#FF6711]'
            : 'text-zinc-300'} text-[14px] flex items-center transition duration-150 ease-out px-3 py-2 cursor-pointer rounded-lg hover:bg-gray-100"
        >
          <Img
            src={item.downvote ? bongIconActive : bongIcon}
            class="w-[1.5rem]"
          />&nbsp;{item.downvoteCount
            ? NumberFormat.formatShort(item.downvoteCount)
            : ''}
        </div>

        <div
          on:click={() => upvote(item)}
          class="{item.upvote
            ? 'text-[#44A5FF]'
            : 'text-zinc-300'} text-[14px] flex items-center transition duration-150 ease-out px-3 py-2 cursor-pointer rounded-lg hover:bg-gray-100"
        >
          <Img
            src={item.upvote ? notBongIconActive : notBongIcon}
            class="w-[1.5rem]"
          />&nbsp;{item.upvoteCount
            ? NumberFormat.formatShort(item.upvoteCount)
            : ''}
        </div>
      </div>
    </div>
  </Masonry>
</section>

{#if isOpenModal}
  <ModalDetail bind:isOpenModal bind:data={dataModal} />
{/if}

{#if isOpenModalVote}
  <ModalVote bind:isOpenModalVote bind:iconVote bind:data={dataModal} />
{/if}

<style>
</style>
