<script lang="ts">
  import logo from '$assets/images/favicon.png';

  export let isOpenModalCreate: boolean = false;
</script>

<!-- <Navbar
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
</Navbar> -->

<nav class="bg-white px-2 sm:px-4 py-2.5 fixed w-full z-20 top-0 left-0">
  <div class="flex flex-wrap justify-between items-center mx-auto">
    <a href="/" class="flex items-center">
      <img src={logo} class="mr-3 h-8 sm:h-7" alt="Checkyourtextbook Logo" />
    </a>
    <div class="flex md:order-2">
      <button
        type="button"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        on:click={() => {
          isOpenModalCreate = true;
        }}>สร้าง</button
      >
    </div>
  </div>
</nav>

<style>
</style>
