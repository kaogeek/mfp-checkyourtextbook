<script lang="ts">
  import { fade } from 'svelte/transition';
  import { Img, P } from 'flowbite-svelte';
  import { Navigation } from 'swiper';
  import { Swiper, SwiperSlide } from 'swiper/svelte';
  import type { Subject } from '$models';

  export let items: Subject[] = [];
</script>

<section in:fade>
  <Swiper
    class="px-16 py-5"
    loop={true}
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
      <SwiperSlide class="rounded-2xl cursor-pointer hover:scale-[1.03] ease-in-out duration-200 min-w-[150px]">
        <Img
          src={subject.thumbnail}
          class="rounded-2xl h-14 w-full object-cover"
          alt="sample 1"
        />

        <div class="absolute top-50 left-50">
          <P
            class="text-white"
            align="center"
            space="normal"
            weight="medium"
            opacity={1}>{subject.name}</P
          >
        </div>
      </SwiperSlide>
    {/each}
  </Swiper>
</section>
