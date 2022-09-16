<script lang="ts">
  import { Header, ModalCreate } from '$ui/components';
  import '../app.css';

  let isOpenModalCreate: boolean = false;
</script>

<Header bind:isOpenModalCreate />
<main class="pt-[60px]">
  <section class="p-4">
    <slot />
  </section>
</main>
<ModalCreate bind:isOpenModalCreate />

<style>
  section {
    min-height: calc(100vh - 60px - 68px);
  }
</style>
