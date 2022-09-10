<script lang="ts">
  import { Header } from '$ui/components';
  import '../app.css';
</script>

<Header />
<main class="pt-[60px]">
  <section class="p-4">
    <slot />
  </section>
</main>

<style>
  section {
    min-height: calc(100vh - 60px - 68px);
  }
</style>
