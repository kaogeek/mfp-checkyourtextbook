<script lang="ts">
  import {
    A,
    Alert,
    Badge,
    Button,
    Img,
    Label,
    Modal,
    P,
  } from 'flowbite-svelte';
  import { Input, Textarea, Select as SelectC } from '$ui/components';
  import { onMount } from 'svelte';
  import apiCall, { Endpoints } from '$core/functions/call';
  import type { Subject } from '$models';

  export let isOpenModalCreate: boolean = false;
  let disabledName: boolean = false;

  import { form, field } from 'svelte-forms';
  import { required } from 'svelte-forms/validators';
  import { contentStore } from '$core';
  import Select from 'svelte-select';

  const title = field('title', '', [required()]);
  const description = field('description', '', [required()]);
  const className = field('className', '', [required()]);
  const subject = field('subject', '', [required()]);
  const hashtag = field('hashtag', [], [required()]);
  const publisherName = field('publisherName', '', [required()]);
  const yearOfPublish = field('yearOfPublish', '', [required()]);
  const userName = field('userName', '', [required()]);
  const base64 = field('base64', '', [required()]);
  const size = field('size', '', [required()]);

  const postForm = form(
    title,
    description,
    className,
    subject,
    hashtag,
    publisherName,
    userName,
    base64,
    size,
    yearOfPublish
  );

  let selectTag: any[] = [];
  let subjects: any[] = [];
  let classes: any[] = [];
  let hashtags: any[] = [];
  let errorUpload: boolean = false;

  const maxSize = 1024000;
  const date = new Date();

  function range(start: number, end: number) {
    return Array.apply(0, Array(end)).map((_, index) => {
      return {
        label: index + start,
        value: index + start,
      };
    });
  }

  let yearList = range(2000, date.getFullYear() - 2000 + 1);

  yearList.sort((a: any, b: any) => {
    return b.value - a.value;
  });

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
      const base64String: string = e.target.result;
      image.src = base64String;

      base64.set(base64String);

      image.onload = (rs: any) => {
        size.set(`${rs.path[0].width}x${rs.path[0].height}`);
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

      if (user) {
        disabledName = true;
        userName.set(user?.aliasName ?? '');
      }
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
        label: subject.name,
        value: subject.slug,
      };
    });

    classes = classResp.map((classes) => {
      return {
        label: classes.name,
        value: classes.name,
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
    if (Object.values($postForm.summary).every((e) => e) && selectTag.length) {
      const { base64, size, className, subject, userName, ...form } =
        $postForm.summary as any;

      const { content, user } = await apiCall(fetch, Endpoints.createContent, {
        method: 'POST',
        body: JSON.stringify({
          ...form,
          photo: {
            base64: base64,
            size: size,
          },
          name: userName,
          hashtag: [...selectTag.map(({ label }) => label), className, subject],
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

  function selectedTag(value: string) {
    if (!selectTag) selectTag = [];

    if (
      !selectTag?.find(
        (tag) => tag.label === value || tag.label === value.replace(/\s/g, '_')
      )
    ) {
      selectTag = [
        ...selectTag,
        {
          label: value,
          value: value.replace(/\s/g, '_'),
        },
      ];
      hashtag.set(selectTag as any);
    }
  }

  async function loadTagMore(filterText: string) {
    const hashtagResp = await apiCall(fetch, Endpoints.getTagSearch, {
      method: 'GET',
      pathParams: [`?tag=${filterText}`],
    });

    return hashtagResp.length
      ? hashtagResp
      : [
          {
            label: filterText,
            value: filterText.replace(/\s/g, '_'),
          },
        ];
  }
</script>

<Modal
  size="lg"
  placement="top-center"
  autoclose={false}
  bind:open={isOpenModalCreate}
  on:hide={() => (isOpenModalCreate = false)}
>
  <div class="text-right">
    <Button
      disabled={!Object.values($postForm.summary).every((value) => value)}
      on:click={() => create()}>บันทึก</Button
    >
  </div>

  <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
    <div>
      <div
        class="flex justify-center items-center w-full transition-all duration-200 {$base64.value
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
          {#if $base64.value}
            <Img class="w-full rounded-lg p-2" src={$base64.value} />
          {:else}
            <div class="flex flex-col justify-center items-center pt-5 pb-6">
              <svg
                aria-hidden="true"
                class="mb-3 w-20 h-20 text-zinc-400"
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
        bind:inputValue={$title.value}
      />

      <Textarea
        placeholder="ตั้งชื่อความบ้งที่คุณพบ"
        rows={4}
        bind:inputValue={$description.value}
      />

      <div class="grid sm:grid-cols-2 sm:gap-2">
        <div>
          <Label for="large-input" class="block font-normal text-base"
            >ที่มาความบ้ง</Label
          >
          <SelectC
            placeholder="ระดับชั้น"
            items={classes}
            bind:inputValue={$className.value}
          />
        </div>
        <div class="sm:pt-[24px]">
          <SelectC
            placeholder="วิชาเรียน"
            items={subjects}
            bind:inputValue={$subject.value}
          />
        </div>
      </div>

      <div>
        <Label for="large-input" class="block font-normal text-base">แท็ก</Label
        >
        <P
          align="left"
          size="sm"
          space="normal"
          weight="medium"
          opacity={1}
          class="mb-1">ติดแท็กเพื่อให้ทุกคนช่วยกันโหวตบ้งได้ง่ายขึ้น</P
        >
        <Select
          bind:items={selectTag}
          bind:value={selectTag}
          placeholder="หาแท็กที่เกี่ยวข้องกับความบ้ง"
          noOptionsMessage="ไม่พบการค้นหา"
          isClearable={false}
          loadOptions={loadTagMore}
          isMulti={true}
        />
        <div class="mt-2 mb-4 min-h-[32px]">
          {#each hashtags as hashtag}
            <span
              id="badge-dismiss-default"
              class="select-none cursor-pointer inline-flex items-center py-1 px-3 mr-1 mt-1 text-sm font-normal text-zinc-700 bg-gray-200 rounded-2xl"
              on:click={() => selectedTag(hashtag.value)}
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
        bind:inputValue={$publisherName.value}
      />

      <SelectC
        placeholder="ปีที่พิมพ์"
        items={yearList}
        bind:inputValue={$yearOfPublish.value}
      />

      <Input
        label="ผู้แจ้งบ้ง"
        description="คุณคือหนึ่งในผู้เข้าร่วมปรับการศึกษาไทย"
        placeholder="ไม่ต้องส่ชื่อจริงมานะ"
        size="md"
        customClass="h-12"
        bind:disabled={disabledName}
        bind:inputValue={$userName.value}
      />
    </div>
  </div>
  <div class="text-center sm:hidden">
    <Button
      class="w-full"
      disabled={!Object.values($postForm.summary).every((value) => value)}
      on:click={() => create()}>บันทึก</Button
    >
  </div>
</Modal>
