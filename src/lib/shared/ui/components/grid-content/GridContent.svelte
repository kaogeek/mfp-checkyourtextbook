<script lang="ts">
  import { LazyImage } from 'svelte-lazy-image';
  import { Img, P } from 'flowbite-svelte';
  import Masonry from 'svelte-bricks';
  import { fade } from 'svelte/transition';
  import { ModalDetail } from '../modal';

  export let items: any[] = [];

  let isOpenModal: boolean = false;
</script>

<section>
  <Masonry
    {items}
    let:item
    minColWidth={300}
    maxColWidth={330}
    gap={4}
    duration={500}
  >
    <section
      in:fade
      out:fade
      on:click={() => (isOpenModal = true)}
      class="cursor-pointer rounded-lg p-2"
    >
      <LazyImage
        src={item.img}
        class="rounded-lg mb-2"
        placeholder="https://via.placeholder.com/500"
        alt={item.title}
        options={{ threshold: 0.4 }}
      />

      <P align="left" size="xs" space="normal" weight="medium" opacity={1}
        >{item.title}</P
      >
    </section>
  </Masonry>
</section>

<ModalDetail bind:isOpenModal />

<style>
</style>
