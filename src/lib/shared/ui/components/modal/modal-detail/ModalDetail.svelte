<script lang="ts">
  import type { ContentGrid } from '$models';
  import {
    A,
    Badge,
    Button,
    Card,
    Heading,
    Img,
    Modal,
    P,
  } from 'flowbite-svelte';
  import { LazyImage } from 'svelte-lazy-image';
  import bongIcon from '$assets/vectors/bong-full.svg';
  import notBongIcon from '$assets/vectors/not-bong-full.svg';
  import { NumberFormat } from '$utils';

  export let isOpenModal: boolean = false;
  export let data: ContentGrid;
</script>

<Modal
  size="lg"
  autoclose={true}
  bind:open={isOpenModal}
  on:hide={() => (isOpenModal = false)}
>
  <div class="text-left">
    <Badge baseClass="m-0 mx-1 rounded-full text-xs" large={true} color="pink"
      >บ้งประถม</Badge
    >
    <Badge baseClass="m-0 mx-1 rounded-full text-xs" large={true} color="pink"
      >โรงพิมพ์คุรุสภา</Badge
    >
  </div>

  <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2">
    <div class="text-left">
      <LazyImage
        src={data.photo.url}
        class="rounded-2xl mb-2 w-full max-h-[500px]"
        placeholder="
      https://via.placeholder.com/{data.photo.size}/cccccc/969696?text=+"
        alt={data.title}
      />
    </div>
    <div class="p-3 pr-0 text-left">
      <Heading customSize="" tag="h4" class="mb-2">{data.title}</Heading>
      <div class="mb-2">
        <P
          class="mb-3"
          align="left"
          size="xs"
          space="normal"
          weight="light"
          opacity={1}>โดย&nbsp;<A size="xs">eiei</A></P
        >
        <P
          class="mb-3"
          align="left"
          size="xs"
          space="normal"
          weight="light"
          opacity={1}
        >
          {data.description}
        </P>
      </div>

      <hr />

      <div class="grid grid-cols-2 gap-3 my-4">
        <div
          class="bg-[#44A5FF] text-white flex flex-col items-center justify-center transition duration-150 ease-out cursor-pointer rounded-lg shadow-md"
        >
          <div class="flex py-2">
            <Img src={notBongIcon} class="w-[1.5rem]" />&nbsp;ไม่บ้ง
          </div>
          <div
            class="bg-[#3794EA] text-[12px] py-1 w-full text-center rounded-b-lg"
          >
            {NumberFormat.formatCurrency(data.upvote)}
          </div>
        </div>

        <div
          class="bg-[#FF6711] text-white flex flex-col items-center justify-center transition duration-150 ease-out cursor-pointer rounded-lg shadow-md"
        >
          <div class="flex py-2">
            <Img src={bongIcon} class="w-[1.5rem]" />&nbsp;บ้งไม่ไหว
          </div>
          <div
            class="bg-[#EA5908] text-[12px] py-1 w-full text-center rounded-b-lg"
          >
            {NumberFormat.formatCurrency(data.downvote)}
          </div>
        </div>
      </div>

      <Button color="light" class="w-full border-none">ความคิดเห็นทั้งหมด (325)</Button>
      <!-- <Heading class="mb-3" customSize="" tag="h6">ความคิดเห็นทั้งหมด</Heading>
      <Card size="xl" padding="sm" class="rounded-lg">
        <div class="flex align-center">
          <Img
            src="https://i.ytimg.com/vi/aILNohZZJSs/maxresdefault.jpg"
            class="rounded-lg w-10 mx-2"
            alt="eiei"
          />
          <Heading customSize="12">ศิวลักษณ์</Heading>
        </div>
        <P
          class="mt-3"
          color="text-gray-500"
          align="left"
          size="sm"
          space="normal"
          weight="light"
          opacity={1}
        >
          วันที่ชาติและองค์ราชา มวลประชาอยู่มาพ้นภัย ขอดูแลคุ้มครองด้วยใจ
          นี่คือคำสัญญา วันนี้ชาติเผชิญพาลภัย ไฟลุกโชนขึ้นมาทุกครา
          ขอเป็นคนที่เดินเข้ามา ไม่อาจให้สายไป เพื่อนรักกลับมา ต้องใช้เวลาเท่าไร
        </P>
      </Card> -->
    </div>
  </div>
</Modal>
