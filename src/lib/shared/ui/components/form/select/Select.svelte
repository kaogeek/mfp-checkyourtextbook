<script lang="ts">
  import { Label, P } from 'flowbite-svelte';
  import Select from 'svelte-select';

  export let label: string = '';
  export let description: string = '';
  export let placeholder: string = '';
  export let inputValue: string;

  export let items: any[] = [];

  function handleSelect(event: any) {
    inputValue = event.detail.value;
  }
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
    {placeholder}
    {items}
    noOptionsMessage="ไม่พบการค้นหา"
    showChevron={true}
    isClearable={false}
    on:select={handleSelect}
  />
</div>

<style>
</style>
