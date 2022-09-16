<script lang="ts">
  import { Swiper, SwiperSlide } from 'swiper/svelte';
  import { Navigation } from 'swiper';
  import { Img, P } from 'flowbite-svelte';

  let items: any[] = [
    'ประวัติศาสตร์',
    'ประวัติศาสตร์',
    'ประวัติศาสตร์',
    'ประวัติศาสตร์',
    'ประวัติศาสตร์',
    'ประวัติศาสตร์',
    'ประวัติศาสตร์',
    'ประวัติศาสตร์',
    'ประวัติศาสตร์',
    'ประวัติศาสตร์',
    'ประวัติศาสตร์',
    'ประวัติศาสตร์',
    'ประวัติศาสตร์',
    'ประวัติศาสตร์',
  ];
</script>

<Swiper
  slidesPerView={6}
  spaceBetween={10}
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
  {#each items as item}
    <SwiperSlide class="cursor-pointer">
      <Img
        src="https://i.ytimg.com/vi/aILNohZZJSs/maxresdefault.jpg"
        class="rounded-lg h-14 w-full object-cover"
        alt="sample 1"
      />

      <div class="absolute top-50 left-50">
        <P
          class="text-white"
          align="center"
          space="normal"
          weight="medium"
          opacity={1}>{item}</P
        >
      </div>
    </SwiperSlide>
  {/each}
</Swiper>
