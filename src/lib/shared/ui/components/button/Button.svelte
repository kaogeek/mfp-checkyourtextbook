<script lang="ts">
  import { Button } from 'flowbite-svelte';
  export let label: string = '';
</script>

<Button size="md">
  {label}
</Button>
