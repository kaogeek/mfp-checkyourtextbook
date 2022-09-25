<script lang="ts">
  import { fade } from 'svelte/transition';
  import { Heading, Img, P } from 'flowbite-svelte';
  import { Navigation } from 'swiper';
  import { Swiper, SwiperSlide } from 'swiper/svelte';
  import type { Subject } from '$models';
  import { searchSubjectStore } from '$core';

  export let items: Subject[] = [];
</script>

<section in:fade>
  <div class="mb-2">
    <div class="text-left px-2 sm:px-16">
      <Heading tag="h6">บ้งรายวิชา</Heading>
      <P
        align="left"
        size="xs"
        space="normal"
        weight="light"
        opacity={1}
        class="mb-1 text-zinc-400">เรียงตามวิชาที่บ้งบ่อยที่สุด</P
      >
    </div>
    <Swiper
      class="px-1 sm:px-16 py-5"
      slidesPerView={6}
      spaceBetween={15}
      breakpoints={{
        320: {
          slidesPerView: 2,
        },
        640: {
          slidesPerView: 4,
        },
        1024: {
          slidesPerView: 6,
        },
        1200: {
          slidesPerView: 6,
        },
      }}
      modules={[Navigation]}
      navigation={true}
    >
      {#each items as subject}
        <SwiperSlide
          class="rounded-2xl cursor-pointer hover:scale-[1.03] transition duration-200 min-w-[150px]"
        >
          <div
            class="relative w-full"
            on:click={() => {
              searchSubjectStore.set(subject.name);
            }}
          >
            <Img
              src={subject.thumbnail}
              class="rounded-2xl h-20 w-full object-cover"
              alt={subject.name}
            />

            <div
              class="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]"
            >
              <P
                class="text-white"
                align="center"
                space="normal"
                weight="medium"
                opacity={1}>{subject.name}</P
              >
            </div>
          </div>
        </SwiperSlide>
      {/each}
    </Swiper>
  </div>
</section>
