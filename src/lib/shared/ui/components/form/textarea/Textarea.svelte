<script lang="ts">
  import { Label, P, Textarea } from 'flowbite-svelte';

  export let label: string = '';
  export let description: string = '';
  export let placeholder: string = '';
  export let customClass: string = '';
  export let rows: number = 1;
  export let inputValue: string;
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

  <Textarea
    id="textarea-id"
    {placeholder}
    {rows}
    class={customClass}
    bind:value={inputValue}
  />
</div>
