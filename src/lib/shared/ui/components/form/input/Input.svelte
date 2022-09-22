<script lang="ts">
  import { Input, Label, P } from 'flowbite-svelte';

  export let label: string = '';
  export let description: string = '';
  export let placeholder: string = '';
  export let customClass: string = '';
  export let size: 'lg' | 'sm' | 'md' | undefined;
  export let inputValue: string;
  export let disabled: boolean = false;
</script>

<div class="mb-6">
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
  <Input
    {size}
    {placeholder}
    class="bg-transparent"
    {customClass}
    {disabled}
    bind:value={inputValue}
  />
</div>
