<script>
  import { Iconinput } from 'flowbite-svelte';
  import { InputIcon } from '../form';
</script>

<div
  class="bg-searcher bg-center bg-no-repeat rounded-2xl flex flex-col justify-center self-center"
>
  <div class="px-5 sm:px-28 md:px-42 lg:px-72 text-center">
    <h1 class="text-white text-2xl mb-5">
      เรื่องบ้งในการศึกษาไทย ยังเกิดขึ้นได้ทุกวัน
    </h1>
    <div class="relative">
      <!-- <Iconinput
        noBorder
        placeholder="ค้นหาเรื่องบ้งๆ ในระบบการศึกษาไทย"
        class="p-4 h-14"
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
      </Iconinput> -->

      <InputIcon
        placeholder="ค้นหาเรื่องบ้งๆ ในระบบการศึกษาไทย"
        customClass="h-14"
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
