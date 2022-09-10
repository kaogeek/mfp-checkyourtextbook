<script lang="ts">
  import {
    A,
    Badge,
    Card,
    Heading,
    Img,
    Modal,
    P,
    Span,
  } from 'flowbite-svelte';
  export let isOpenModal: boolean;
</script>

<Modal
  size="xl"
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
      <Img
        src="https://i.ytimg.com/vi/aILNohZZJSs/maxresdefault.jpg"
        class="rounded-lg mb-2"
        alt="eiei"
      />
      <Heading customSize="" tag="h4" class="mb-2">
        ไหนๆ ใครว่าหนังสือเขียนผิดบ้าง ถ้าประยุทธเป็นคนกล้าหาญ รวดเร็ว ฉับพลัน
        เราน่าจะมีนิคมบนดาวอังคารไปแล้วว่ามั้ย
      </Heading>
      <div class="mb-2">
        <P
          class="mb-3"
          align="left"
          size="sm"
          space="normal"
          weight="light"
          opacity={1}>โดย&nbsp;<A size="xs">eiei</A></P
        >
      </div>
      <P
        class="mb-3"
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
    </div>
    <div class="p-3 pr-0 text-left">
      <Heading class="mb-3" customSize="" tag="h6">ความคิดเห็นทั้งหมด</Heading>
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
      </Card>
    </div>
  </div>
</Modal>
