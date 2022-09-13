<script lang="ts">
  import { Iconinput, Label, P } from 'flowbite-svelte';

  export let label: string = '';
  export let description: string = '';
  export let placeholder: string = '';
  export let customClass: string = '';
  export let size: 'lg' | 'sm' | 'md' | undefined;
</script>

<div class="mb-6">
  {#if label}
    <Label class="block font-medium text-base">{label}</Label>
  {/if}
  {#if description}
    <P align="left" size="xs" space="normal" weight="medium" opacity={1}  class="mb-1"
      >{description}</P
    >
  {/if}
  <div class="relative">
    <Iconinput noBorder {size} {placeholder} class={customClass}>
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
  </div>
</div>
