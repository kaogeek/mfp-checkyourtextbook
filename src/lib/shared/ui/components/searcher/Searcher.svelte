<script lang="ts">
  import { searchStore } from '$core';
  import { Heading } from 'flowbite-svelte';

  let timer: any;
  const debounce = (event: any) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      searchStore.set(event.target.value);
    }, 750);
  };
</script>

<div
  class="bg-searcher bg-center bg-no-repeat rounded-2xl flex flex-col justify-center self-center"
>
  <div class="px-7 sm:px-28 md:px-32 lg:px-72 text-center">
    <Heading tag="h2" color="text-white" customSize="text-4xl mb-5">
      เพราะการศึกษาไทย ยังมีเรื่องบ้งๆ ที่เราต้องช่วยกันแก้
    </Heading>
    <!-- <div class="relative">
      <Iconinput
        noBorder
        placeholder="ค้นหาเรื่องบ้งๆ ในระบบการศึกษาไทย"
        class="p-4 h-14"
        custimClass="bg-white border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 pl-10"
      >
        <svg
          aria-hidden="true"
          class="w-5 h-5 text-gray-500 dark:text-gray-400"
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
      </Iconinput>
    </div> -->

    <div class="relative">
      <div
        class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"
      >
        <svg
          aria-hidden="true"
          class="w-5 h-5 text-gray-500"
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
        on:keyup={(e) => debounce(e)}
        placeholder="ค้นหาเรื่องบ้งๆ ในระบบการศึกษาไทย"
        type="text"
        class="p-4 h-12 bg-white border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 pl-10"
      />
    </div>
  </div>
</div>

<style>
  div.bg-searcher {
    background-image: url('https://images.pexels.com/photos/47547/squirrel-animal-cute-rodents-47547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2');
    background-size: cover;
    height: 320px;
  }
</style>
