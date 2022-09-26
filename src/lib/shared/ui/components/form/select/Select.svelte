<script lang="ts">
  import { Label, P, Select } from 'flowbite-svelte';

  export let label: string = '';
  export let description: string = '';
  export let placeholder: string = '';
  export let size: 'lg' | 'sm' | 'md' | undefined;
  export let inputValue: string;

  export let items: any[] = [];
</script>

<div class="mb-3 sm:mb-4">
  {#if label}
    <Label for="large-input" class="block font-normal text-base">{label}</Label>
  {/if}
  {#if description}
    <P
      align="left"
      size="sm"
      space="normal"
      weight="medium"
      opacity={1}
      class="mb-1">{description}</P
    >
  {/if}

  <Select
    class="mt-1 bg-transparent h-[42px]"
    {size}
    {placeholder}
    {items}
    bind:value={inputValue}
  />
</div>
