<script lang="ts">
  import { Header, ModalCreate } from '$ui/components';

  let isOpenModalCreate: boolean = false;
  let scrollY: number = 0;
</script>

<Header bind:isOpenModalCreate bind:scrollY />

<main>
  <slot />
</main>

{#if isOpenModalCreate}
  <ModalCreate bind:isOpenModalCreate />
{/if}

<svelte:window bind:scrollY />

<style>
  @import url('../app.css');

  main {
    min-height: calc(100vh - 60px - 68px);
  }
</style>
