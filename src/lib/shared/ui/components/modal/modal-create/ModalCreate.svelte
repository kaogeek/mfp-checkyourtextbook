<script lang="ts">
  import { Badge, Label, Modal } from 'flowbite-svelte';
  import { Input, Textarea, InputIcon, Select } from '$ui/components';

  export let isOpenModalCreate: boolean;
</script>

<Modal
  size="lg"
  autoclose={true}
  bind:open={isOpenModalCreate}
  on:hide={() => (isOpenModalCreate = false)}
>
  <br />
  <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
    <div>
      <div class="flex justify-center items-center w-full h-4/6 min-h-[300px]">
        <label
          for="dropzone-file"
          class=" flex flex-col justify-center items-center w-full h-full bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100"
        >
          <div class="flex flex-col justify-center items-center pt-5 pb-6">
            <svg
              aria-hidden="true"
              class="mb-3 w-10 h-10 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              ><path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
              /></svg
            >
            <p class="mb-2 text-sm text-gray-500">
              <span class="font-semibold">โยนรูปบ้งๆ เข้ามาในนี้</span>
            </p>
            <p class="text-xs text-gray-500">
              SVG, PNG, JPG or GIF (ขนาดไม่เกิน 10 Mb)
            </p>
          </div>
          <input id="dropzone-file" type="file" class="hidden" />
        </label>
      </div>
    </div>

    <div>
      <Input
        placeholder="ตั้งชื่อความบ้งที่คุณพบ"
        size="lg"
        customClass="h-14 bg-inherit"
      />

      <Textarea placeholder="ตั้งชื่อความบ้งที่คุณพบ" rows={4} />

      <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
        <div>
          <Label for="large-input" class="block font-medium text-base"
            >ที่มาความบ้ง</Label
          >
          <Select placeholder="ระดับชั้น" size="md" />
        </div>
        <div class="pt-[24px]">
          <Select placeholder="วิชาเรียน" size="md" />
        </div>
      </div>

      <div>
        <InputIcon
          label="แท็ก"
          description="ติดแท็กเพื่อให้ทุกคนช่วยกันโหวตบ้งได้ง่ายขึ้น"
          placeholder="หาแท็กที่เดี่ยวข้องกับความบ้ง"
          size="md"
          customClass="h-12 bg-inherit"
        />
        <div class="mt-[-12px] mb-[14px]">
          <Badge
            baseClass="mx-1 py-1 px-5 rounded-full text-sm bg-gray-200"
            color="gray"
            large={true}>บ้งประถม</Badge
          >
        </div>
      </div>

      <Input
        label="สำนักพิมพ์"
        placeholder="ชื่อสำนักพิมพ์ที่สร้างความบ้ง"
        size="md"
        customClass="h-12 bg-inherit"
      />

      <Input
        label="ผู้แจ้งบ้ง"
        description="คุณคือหนึ่งในผู้เข้าร่วมปรับการศึกษาไทย"
        placeholder="ไม่ต้องส่ชื่อจริงมานะ"
        size="md"
        customClass="h-12 bg-inherit"
      />
    </div>
  </div>
</Modal>
