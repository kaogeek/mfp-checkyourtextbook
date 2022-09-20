<script lang="ts">
  import { Label, P, Select } from 'flowbite-svelte';

  export let label: string = '';
  export let description: string = '';
  export let placeholder: string = '';
  export let size: 'lg' | 'sm' | 'md' | undefined;

  let selected: string;

  let items: {
    value: string;
    name: string;
  }[];
</script>

<div class="mb-6">
  {#if label}
    <Label for="large-input" class="block font-medium text-base">{label}</Label>
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

  <Select class="mt-2 bg-transparent" {size} {placeholder} {items} bind:value={selected} />
</div>
