<script lang="ts">
  import { Swiper, SwiperSlide } from 'swiper/svelte';
  import { Img, P } from 'flowbite-svelte';
  import { searchClassStore } from '$core';

  export let items: any[] = [];
</script>

<Swiper
  slidesPerView={5}
  spaceBetween={10}
  centeredSlidesBounds={true}
  breakpoints={{
    320: {
      slidesPerView: 3,
    },
    640: {
      slidesPerView: 4,
    },
    1024: {
      slidesPerView: 5,
    },
    1200: {
      slidesPerView: 5,
    },
  }}
>
  {#each items as item}
    <SwiperSlide class="rounded-2xl cursor-pointer flex flex-col">
      <div
        on:click={() => {
          searchClassStore.set(item.name === 'ทุกระดับชั้น' ? '' : item.name);
        }}
      >
        <Img
          src="https://i.ytimg.com/vi/aILNohZZJSs/maxresdefault.jpg"
          class="rounded-2xl h-14 w-full object-cover"
          alt="sample 1"
        />
        <P
          class="text-[13px] text-gray-600"
          align="center"
          space="normal"
          weight="medium"
          size="sm"
          opacity={1}>{item.name}</P
        >
      </div>
    </SwiperSlide>
  {/each}
</Swiper>
