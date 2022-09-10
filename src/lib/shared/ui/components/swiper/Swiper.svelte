<script lang="ts">
  import { Swiper, SwiperSlide } from 'swiper/svelte';
  import { Navigation } from 'swiper';
  import { Img, P } from 'flowbite-svelte';
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
  <SwiperSlide>
    <Img
      src="https://i.ytimg.com/vi/aILNohZZJSs/maxresdefault.jpg"
      class="rounded-lg h-14 w-full object-cover"
      alt="sample 1"
    />

    <div class="absolute top-50 left-50">
      <P color="" align="center" size="sm" space="normal" weight="medium" opacity={1}
        >ประวัติศาสตร์</P
      >
    </div>
  </SwiperSlide>
</Swiper>
