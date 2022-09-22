<script lang="ts">
  import { Badge, Button, Label, Modal } from 'flowbite-svelte';
  import { Input, Textarea, InputIcon, Select } from '$ui/components';
  import { onMount } from 'svelte';
  import apiCall, { Endpoints } from '$core/functions/call';
  import type { Subject } from '$models';

  export let isOpenModalCreate: boolean;
  let createPost = {
    title: '',
    photo: {
      base64: 'mock',
      size: '564x493',
    },
    description: '',
    primaryClass: '',
    subject: '',
    hashtag: [],
    publisherName: '',
    name: '',
  };

  let selectTag = '';

  let disabled: boolean = false;

  let subjects: any[] = [];
  let classes: any[] = [];
  let hashtags: any[] = [];

  onMount(async () => {
    const userId = localStorage.getItem('userId');
    if (userId) {
      const user = await apiCall(fetch, Endpoints.getUserById, {
        method: 'GET',
        pathParams: [`?userId=${userId}`],
      });

      if (user) disabled = true;
      createPost.name = user?.aliasName ?? '';
    }

    const [subjectsResp, secondaryClass, hashtagResp]: [
      Subject[],
      any[],
      any[]
    ] = await Promise.all([
      apiCall(fetch, Endpoints.getSubject, {
        method: 'GET',
      }),
      apiCall(fetch, Endpoints.getSecondaryClass, {
        method: 'GET',
      }),
      apiCall(fetch, Endpoints.getRecomTag, {
        method: 'GET',
      }),
    ]);

    subjects = subjectsResp.map((subject) => {
      return {
        name: subject.name,
        value: subject.slug,
      };
    });

    classes = secondaryClass.map((subject) => {
      return {
        name: subject.name,
        value: subject.name,
      };
    });

    hashtags = hashtagResp.map((hashtag) => {
      return {
        name: hashtag.name,
        value: hashtag.slug,
      };
    });
  });

  async function create() {
    if (Object.values(createPost).every((e) => e)) {
      // isOpenModalCreate = false;
      createPost.hashtag = [selectTag] as any;
      await apiCall(fetch, Endpoints.createContent, {
        method: 'POST',
        body: JSON.stringify(createPost),
      });
    }
  }
</script>

<Modal
  size="lg"
  autoclose={false}
  bind:open={isOpenModalCreate}
  on:hide={() => (isOpenModalCreate = false)}
>
  <div class="text-right">
    <Button on:click={() => create()}>สร้าง</Button>
  </div>
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
        customClass="h-12"
        bind:inputValue={createPost.title}
      />

      <Textarea
        placeholder="ตั้งชื่อความบ้งที่คุณพบ"
        rows={4}
        bind:inputValue={createPost.description}
      />

      <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
        <div>
          <Label for="large-input" class="block font-medium text-base"
            >ที่มาความบ้ง</Label
          >
          <Select
            placeholder="ระดับชั้น"
            size="md"
            items={classes}
            bind:inputValue={createPost.primaryClass}
          />
        </div>
        <div class="pt-[24px]">
          <Select
            placeholder="วิชาเรียน"
            size="md"
            items={subjects}
            bind:inputValue={createPost.subject}
          />
        </div>
      </div>

      <div>
        <InputIcon
          label="แท็ก"
          description="ติดแท็กเพื่อให้ทุกคนช่วยกันโหวตบ้งได้ง่ายขึ้น"
          placeholder="หาแท็กที่เกี่ยวข้องกับความบ้ง"
          customClass="h-12"
          bind:inputValue={selectTag}
        />
        <div class="mt-[-12px] mb-[14px]">
          {#each hashtags as hashtag}
            <span
              id="badge-dismiss-default"
              class="inline-flex items-center py-1 px-3 mr-1 mt-1 text-sm font-medium text-gray-700 bg-gray-200 rounded-2xl"
            >
              {hashtag.name}
            </span>
          {/each}
        </div>
      </div>

      <Input
        label="สำนักพิมพ์"
        placeholder="ชื่อสำนักพิมพ์ที่สร้างความบ้ง"
        size="md"
        customClass="h-12"
        bind:inputValue={createPost.publisherName}
      />

      <Input
        label="ผู้แจ้งบ้ง"
        description="คุณคือหนึ่งในผู้เข้าร่วมปรับการศึกษาไทย"
        placeholder="ไม่ต้องส่ชื่อจริงมานะ"
        size="md"
        customClass="h-12"
        bind:disabled
        bind:inputValue={createPost.name}
      />
    </div>
  </div>
</Modal>
