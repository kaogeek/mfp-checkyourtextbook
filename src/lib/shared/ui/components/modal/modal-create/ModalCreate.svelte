<script lang="ts">
  import { Alert, Badge, Button, Img, Label, Modal } from 'flowbite-svelte';
  import { Input, Textarea, InputIcon, Select } from '$ui/components';
  import { onMount } from 'svelte';
  import apiCall, { Endpoints } from '$core/functions/call';
  import type { Subject } from '$models';
  import { contentStore } from '$core';

  export let isOpenModalCreate: boolean = false;

  let createPost = {
    title: '',
    photo: {
      base64: '',
      size: '',
    },
    description: '',
    class: '',
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
  let errorUpload: boolean = false;

  const maxSize = 1024000;

  const dropHandler = async (event: DragEvent) => {
    event.preventDefault();

    const files = event.dataTransfer?.items
      ? Array.from(event.dataTransfer.items).map((item) => item.getAsFile())
      : event.dataTransfer?.files;

    if (!files) return;

    uploadFile(files);
  };

  const changeHandler = async (event: Event) => {
    const files = (event.target as HTMLInputElement).files;
    if (!files) return;

    uploadFile(files);

    (event.target as HTMLInputElement).value = '';
  };

  const uploadFile = async (files: any) => {
    errorUpload = false;

    if (files[0].size > maxSize) {
      errorUpload = true;
      return;
    }

    const reader = new FileReader();
    reader.readAsDataURL(files[0]);

    reader.onloadend = (e: any) => {
      const image: HTMLImageElement = new Image();
      const base64: string = e.target.result;
      image.src = base64;

      image.onload = (rs: any) => {
        createPost.photo.base64 = base64;
        createPost.photo.size = `${rs.path[0].width}x${rs.path[0].height}`;
      };
    };
  };

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

    const [subjectsResp, classResp, hashtagResp]: [Subject[], any[], any[]] =
      await Promise.all([
        apiCall(fetch, Endpoints.getSubject, {
          method: 'GET',
        }),
        apiCall(fetch, Endpoints.getPrimaryClass, {
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

    classes = classResp.map((c: any) => {
      return {
        name: c.name,
        value: c.name,
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
    if (Object.values(createPost).every((e) => e) && createPost.photo) {
      createPost.hashtag = [selectTag] as any;

      const { content, user } = await apiCall(fetch, Endpoints.createContent, {
        method: 'POST',
        body: JSON.stringify({
          title: createPost.title,
          photo: createPost.photo,
          description: createPost.description,
          hashtag: [
            ...createPost.hashtag,
            createPost.class,
            createPost.subject,
          ],
          publisherName: createPost.publisherName,
          name: createPost.name,
        }),
      });

      if (user) {
        localStorage.setItem('userId', user._id);
        localStorage.setItem('name', user.aliasName);
      }

      contentStore.set(content);
      isOpenModalCreate = false;
    }
  }
</script>

<Modal
  size="lg"
  placement="center"
  autoclose={false}
  bind:open={isOpenModalCreate}
  on:hide={() => (isOpenModalCreate = false)}
>
  <div class="text-right invisible sm:visible">
    <Button on:click={() => create()}>บันทึก</Button>
  </div>

  <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
    <div>
      <div
        class="flex justify-center items-center w-full transition-all duration-200 {createPost
          .photo.base64
          ? 'min-h-auto'
          : 'h-4/6 min-h-[300px]'}"
        on:drop={dropHandler}
        on:dragover={(event) => {
          event.preventDefault();
        }}
      >
        <label
          for="dropzone-file"
          class=" flex flex-col justify-center items-center w-full h-full bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer"
        >
          {#if createPost.photo.base64}
            <Img class="w-full rounded-lg p-2" src={createPost.photo.base64} />
          {:else}
            <div class="flex flex-col justify-center items-center pt-5 pb-6">
              <svg
                aria-hidden="true"
                class="mb-3 w-10 h-10 text-zinc-400"
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
              <div class="mb-2 text-base text-zinc-500">
                โยนรูปบ้งๆ เข้ามาในนี้
              </div>
              <div class="text-xs text-zinc-400">
                SVG, PNG, JPG or GIF (ขนาดไม่เกิน 10 Mb)
              </div>
            </div>
          {/if}
          <input
            id="dropzone-file"
            type="file"
            class="hidden"
            accept=".jpg, .jpeg, .png"
            on:change={changeHandler}
          />
        </label>
      </div>

      {#if errorUpload}
        <div class="mt-2">
          <Alert color="red"
            >อัปโหลดรูปเกินขนาด 10 MB กรุณาลองใหม่อีกครั้ง</Alert
          >
        </div>
      {/if}
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

      <div class="grid sm:grid-cols-2 sm:gap-2">
        <div>
          <Label for="large-input" class="block font-normal text-base"
            >ที่มาความบ้ง</Label
          >
          <Select
            placeholder="ระดับชั้น"
            size="sm"
            items={classes}
            bind:inputValue={createPost.class}
          />
        </div>
        <div class="sm:pt-[24px]">
          <Select
            placeholder="วิชาเรียน"
            size="sm"
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
          bind:inputValue={selectTag}
        />
        <div class="mt-[-5px] sm:mt-[-12px] mb-4 min-h-[32px]">
          {#each hashtags as hashtag}
            <span
              id="badge-dismiss-default"
              class="select-none cursor-pointer inline-flex items-center py-1 px-3 mr-1 mt-1 text-sm font-normal text-zinc-700 bg-gray-200 rounded-2xl"
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
  <div class="text-center sm:hidden">
    <Button class="w-full" on:click={() => create()}>บันทึก</Button>
  </div>
</Modal>
