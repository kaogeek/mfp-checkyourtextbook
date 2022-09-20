<script lang="ts">
  import { page } from '$app/stores';
  import { Button } from 'flowbite-svelte';
</script>

<svelte:head>
  <title>เกิดข้อผิดพลาด</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
  <h1>{$page.status}</h1>
  <p>{$page?.error?.message}</p>

  <Button color="light" href="/">กลับสู่หน้าหลัก</Button>
</section>

<style>
  section {
    @apply absolute top-1/3 inset-x-px text-center;
  }

  h1 {
    @apply text-9xl mb-5;
  }

  p {
    @apply mb-5;
  }
</style>
