<script lang="ts">
  import logo from '$assets/images/favicon.png';
  import arrowDowmIcon from '$assets/vectors/arrow-down.svg';

  import { Endpoints } from '$core';
  import apiCall from '$core/functions/call';
  import { onMount } from 'svelte';
  import { SwiperClass } from '../swiper';

  export let isOpenModalCreate: boolean = false;
  export let scrollY: number;
  let toggleClassMenu: boolean = false;
  let primaryClass: any[] = [];

  onMount(async () => {
    const primaryClasses = await apiCall(fetch, Endpoints.getPrimaryClass, {
      method: 'GET',
    });

    primaryClass = [
      {
        name: 'ทุกระดับชั้น',
      },
    ];

    primaryClass.push(
      ...primaryClasses.map((item: any) => {
        return {
          name: item.class,
        };
      })
    );
  });
</script>

<div class="sticky w-full z-20 top-0 left-0">
  <nav
    class="{scrollY > 1
      ? 'shadow-md'
      : ''} bg-white px-2 sm:px-4 py-2.5 relative"
  >
    <div class="flex flex-wrap justify-between items-center mx-auto">
      <a href="/" class="flex items-center min-w-[90px]">
        <img src={logo} class="mx-2 h-8 sm:h-7" alt="Checkyourtextbook Logo" />
      </a>

      <div class="absolute bottom-0 left-1/2 translate-x-[-50%]">
        <div
          class="after:bg-[url({arrowDowmIcon})] after:absolute after:bottom-0 after:h-3 mt-2 text-[13px] bg-gray-200 h-11 flex items-center justify-center rounded-t-lg px-3 cursor-pointer text-gray-600 select-none"
          on:click={() => {
            toggleClassMenu = !toggleClassMenu;
          }}
        >
          ทุกระดับการศึกษา
        </div>
      </div>

      <div class="flex min-w-[90px]">
        <div class="hidden md:block">
          <button
            type="button"
            class="mx-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 text-center"
            on:click={() => {
              isOpenModalCreate = true;
            }}>สร้าง</button
          >
        </div>
      </div>
    </div>
  </nav>
  <div
    class="{toggleClassMenu ? 'h-[130px]' : 'h-0'} {scrollY > 1
      ? 'shadow-md'
      : ''} overflow-hidden flex justify-center duration-300 bg-gray-200"
  >
    <div class=" flex items-center p-3 w-[100%] sm:w-[60%]">
      <SwiperClass bind:items={primaryClass} />
    </div>
  </div>
</div>

<style>
</style>
