<script lang="ts">
  import { searchStore } from '$core';
  import apiCall, { Endpoints } from '$core/functions/call';
  import type { ContentGrid } from '$models';
  import { Heading } from 'flowbite-svelte';
  import { onMount } from 'svelte';

  let timer: NodeJS.Timeout;

  let background: ContentGrid;

  onMount(async () => {
    [background] = await loadContentMost();
  });

  async function loadContentMost(): Promise<ContentGrid[]> {
    return apiCall(fetch, Endpoints.getContent, {
      method: 'GET',
      pathParams: [`?searchCategory=hot`],
    });
  }

  const debounce = (event: KeyboardEvent) => {
    const target = event.target as HTMLInputElement;

    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      searchStore.set(target.value);
    }, 750);
  };
</script>

<div
  class="rounded-none sm:rounded-2xl h-[320px] bg-searcher bg-center bg-no-repeat flex flex-col justify-center self-center"
  style="background-image: url({background
    ? background.photo?.url
    : `https://via.placeholder.com/300x300/cccccc/969696?text=+`});"
>
  <div class="px-5 sm:px-[20%] md:px-[20%] lg:px-[25%] text-center">
    <Heading
      tag="h2"
      color="text-white leading-normal mb-3"
      customSize="text-3xl"
    >
      เพราะการศึกษาไทย ยังมีเรื่องบ้งๆ <br /> ที่เราต้องช่วยกันแก้
    </Heading>

    <div class="relative">
      <div
        class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"
      >
        <svg
          aria-hidden="true"
          class="w-5 h-5 text-zinc-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          ><path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          /></svg
        >
      </div>
      <input
        on:keyup={debounce}
        placeholder="ค้นหาเรื่องบ้งๆ ในระบบการศึกษาไทย"
        type="text"
        class="p-4 h-12 bg-white border border-gray-300 text-zinc-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10"
      />
    </div>
  </div>
</div>

<style>
  div.bg-searcher {
    background-size: cover;
  }
</style>
