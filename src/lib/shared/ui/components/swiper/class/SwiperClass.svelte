<script lang="ts">
  import { Swiper, SwiperSlide } from 'swiper/svelte';
  import { Img, P } from 'flowbite-svelte';
  import { searchClassStore } from '$core';

  export let items: any[] = [];
</script>

<Swiper
  slidesPerView={6}
  spaceBetween={10}
  centeredSlidesBounds={true}
  breakpoints={{
    320: {
      slidesPerView: 4,
    },
    640: {
      slidesPerView: 5,
    },
    1024: {
      slidesPerView: 6,
    },
    1200: {
      slidesPerView: 6,
    },
  }}
>
  {#each items as item}
    <SwiperSlide
      class="rounded-2xl cursor-pointer hover:bg-gray-50 transition duration-200 py-2"
    >
      <div
        class="text-center"
        on:click={() => {
          searchClassStore.set(item.name === 'ทุกระดับชั้น' ? '' : item.name);
        }}
      >
        <Img
          class="w-[80px]"
          src="/src/lib/assets/images/classes/{item.seq}.svg"
          alt={item.name}
        />
        <P
          class="text-[13px] text-zinc-600"
          align="center"
          space="normal"
          weight="medium"
          size="xs"
          opacity={1}>{item.name}</P
        >
      </div>
    </SwiperSlide>
  {/each}
</Swiper>
