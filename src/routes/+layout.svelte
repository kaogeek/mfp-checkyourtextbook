<script lang="ts">
  import { Header, ModalCreate } from '$ui/components';
  import '../app.css';

  let isOpenModalCreate: boolean = false;
  let scrollY: number = 0;
</script>

<Header bind:isOpenModalCreate bind:scrollY />
<main class="mt-2">
  <section class="sm:p-4 p-0">
    <slot />
  </section>
</main>

{#if isOpenModalCreate}
  <ModalCreate bind:isOpenModalCreate />
{/if}

<svelte:window bind:scrollY />

<style>
  section {
    min-height: calc(100vh - 60px - 68px);
  }
</style>
