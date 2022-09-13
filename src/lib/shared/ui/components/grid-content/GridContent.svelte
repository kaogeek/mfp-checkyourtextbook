<script lang="ts">
  import { Img, P } from 'flowbite-svelte';
  import Masonry from 'svelte-bricks';
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
</section>

<ModalDetail bind:isOpenModal />

<style>
</style>
