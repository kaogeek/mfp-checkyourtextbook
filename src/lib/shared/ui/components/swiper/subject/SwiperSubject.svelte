<script lang="ts">
  import { Heading, P } from "flowbite-svelte";
  import { Navigation } from "swiper";
  import { Swiper, SwiperSlide } from "swiper/svelte";
  import type { Subject } from "$models";
  import { searchSubjectStore } from "$core";

  export let items: Subject[] = [];

  let selected: string = "";
  let selectedCurrent: string = "";
</script>

<section>
  <div class="mb-2 min-h-[176px]">
    <div class="text-left px-2 sm:px-16">
      <Heading tag="h5">บ้งรายวิชา</Heading>
      <P
        align="left"
        space="normal"
        weight="normal"
        opacity={1}
        class="mb-1 text-zinc-400 text-[1rem]">เรียงตามวิชาที่บ้งบ่อยที่สุด</P
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
              if (selectedCurrent !== subject.name) {
                selected = subject.name;
                selectedCurrent = selected;
                searchSubjectStore.set(subject.name);
              } else {
                selected = "";
                searchSubjectStore.set("");
              }
              searchSubjectStore.set(subject.name);
            }}
          >
            <img
              src={selected === subject.name
                ? "https://via.placeholder.com/300x300/ff6711/FFFFFF?text=+"
                : subject.thumbnail}
              class="rounded-2xl h-20 w-full object-cover"
              alt={subject.name}
            />

            <div
              class="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] text-white"
            >
              {subject.name}
            </div>
          </div>
        </SwiperSlide>
      {/each}
    </Swiper>
  </div>
</section>
