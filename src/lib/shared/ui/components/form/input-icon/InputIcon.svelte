<script lang="ts">
  import { Label, P } from 'flowbite-svelte';

  export let label: string = '';
  export let description: string = '';
  export let placeholder: string = '';
  export let customClass: string = '';
  export let inputValue: string;
</script>

<div class="mb-3 sm:mb-4">
  {#if label}
    <Label class="block font-medium text-base">{label}</Label>
  {/if}
  {#if description}
    <P
      align="left"
      size="xs"
      space="normal"
      weight="medium"
      opacity={1}
      class="mb-1">{description}</P
    >
  {/if}
  <!-- <Iconinput
    noBorderInputClass="bg-inherit border border-gray-300 text-zinc-900 rounded-lg"
    noBorder
    {size}
    {placeholder}
    class={customClass}
  >
    <svg
      aria-hidden="true"
      class="w-5 h-5 text-zinc-500 dark:text-zinc-400"
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
  <div class="relative">
    <div
      class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"
    >
      <svg
        aria-hidden="true"
        class="w-5 h-5 text-zinc-500 dark:text-zinc-400"
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
      type="text"
      class="{customClass} bg-white border border-gray-300 text-zinc-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 pl-10"
      {placeholder}
      bind:value={inputValue}
    />
  </div>
</div>
