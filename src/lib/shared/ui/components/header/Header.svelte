<script lang="ts">
  import {
    Navbar,
    NavBrand,
    NavLi,
    NavHamburger,
    NavUl,
    Button,
  } from 'flowbite-svelte';

  export let isOpenModalCreate: boolean = false;
</script>

<Navbar
  class="z-[2] fixed top-0 left-0 right-0"
  let:hidden
  let:toggle
  rounded={true}
>
  <NavBrand href="/">
    <img src="https://flowbite.com/docs/images/logo.svg" alt="Flowbite Logo" />
    <span
      class="self-center whitespace-nowrap text-xl font-semibold dark:text-white"
    >
      บ้ง
    </span>
  </NavBrand>
  <div class="flex md:order-2">
    <Button
      on:click={() => {
        isOpenModalCreate = true;
      }}
    >
      สร้าง</Button
    >
    <NavHamburger on:click={toggle} />
  </div>
  <NavUl {hidden}>
    <NavLi href="/">บ้งประถม</NavLi>
    <NavLi href="/">บ้งมัธยม</NavLi>
    <NavLi href="/">บ้งมหาลัยฯ</NavLi>
  </NavUl>
</Navbar>

<style>
  img {
    @apply mr-3 h-6 sm:h-9;
  }
</style>
