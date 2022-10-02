<script lang="ts">
  import { Swiper, SwiperSlide } from "swiper/svelte";
  import { Img, P } from "flowbite-svelte";
  import { searchClassStore } from "$core";

  import classIcon0 from "$assets/images/classes/0.svg";
  import classIcon1 from "$assets/images/classes/1.svg";
  import classIcon2 from "$assets/images/classes/2.svg";
  import classIcon3 from "$assets/images/classes/3.svg";
  import classIcon4 from "$assets/images/classes/4.svg";
  import classIcon5 from "$assets/images/classes/5.svg";

  export let items: any[] = [];

  let selected: string = "ทุกระดับชั้น";
  let selectedCurrent: string = "ทุกระดับชั้น";

  function generateIcon(seq: number) {
    switch (seq) {
      case 0:
        return classIcon0;

      case 1:
        return classIcon1;

      case 2:
        return classIcon2;

      case 3:
        return classIcon3;

      case 4:
        return classIcon4;

      default:
        return classIcon5;
    }
  }
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
    1400: {
      slidesPerView: 6,
    },
  }}
>
  {#each items as item}
    <SwiperSlide
      class="rounded-2xl cursor-pointer transition duration-200 {selected ===
      item.name
        ? 'bg-[#ff6711]'
        : ''}"
    >
      <div
        class="text-center text-[13px]  {selected === item.name
          ? 'text-white'
          : 'text-zinc-600'}"
        on:click={() => {
          if (selectedCurrent !== item.name) {
            selected = item.name;
            selectedCurrent = selected;
            searchClassStore.set(item.name === "ทุกระดับชั้น" ? "" : item.name);
          } else {
            selected = "";
            searchClassStore.set("");
          }
        }}
      >
        <img
          class="w-[70px] {selected === item.name ? 'active' : ''}"
          src={generateIcon(item.seq)}
          alt={item.name}
        />
        {item.name}
      </div>
    </SwiperSlide>
  {/each}
</Swiper>

<style>
  .active {
    filter: brightness(200%);
  }
</style>
