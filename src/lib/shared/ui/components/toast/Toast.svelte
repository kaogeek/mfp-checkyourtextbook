<script lang="ts">
  import { Toast } from 'flowbite-svelte';
  import { fly } from 'svelte/transition';
</script>

<div class="z-[999] fixed top-5 right-5">
  <Toast transition={fly} params={{ x: 200 }} class="my-2">
    <svelte:fragment slot="icon">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-6 h-6"
        ><path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        /></svg
      >
    </svelte:fragment>
    Transition type: slide, delay: 250, duration: 300, easing: quintOut
  </Toast>
</div>
