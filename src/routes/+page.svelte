<script lang="ts">
  // import type { User } from '$models';
  import { Swiper, GridContent, Searcher, Submenu } from '$ui/components';
  import { Heading, P } from 'flowbite-svelte';

  // export let data: { payload: User[] };
  // export let errors: any;
</script>

<svelte:head>
  <title>หน้าหลัก</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
  <Searcher />
</section>

<section class="mt-8">
  <Submenu />
</section>

<section class="mt-8">
  <Swiper />
</section>

<section class="mt-8 text-center">
  <Heading customSize="" tag="h4" class="mb-2">ช่วยกันตรวจสอบความบ้ง</Heading>
  <P
    class="mb-8"
    align="center"
    size="sm"
    space="normal"
    weight="medium"
    opacity={1}>ช่วยกันตรวจสอบความบ้งของการศึกษาไทย</P
  >
  <GridContent />
</section>

<style>
</style>
