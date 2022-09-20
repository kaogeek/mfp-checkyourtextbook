<script lang="ts">
  import { Button, Img, Modal } from 'flowbite-svelte';
  import { Input, Textarea } from '$ui/components';
  import bongIconActive from '$assets/vectors/bong-active.svg';
  import notBongIconActive from '$assets/vectors/not-bong-active.svg';
  import apiCall, { Endpoints } from '$core/functions/call';
  import { onMount } from 'svelte';
  import type { ContentGrid } from '$models';

  import { contentStore } from '$core';
  import { fade } from 'svelte/transition';

  export let isOpenModalVote: boolean;
  export let iconVote: string;
  export let data: ContentGrid;
  let voteData = {
    reason: '',
    status: '',
    name: '',
    contentId: '',
  };

  voteData.status = iconVote;

  onMount(async () => {
    if (localStorage.getItem('name') && localStorage.getItem('userId')) {
      const user = await apiCall(fetch, Endpoints.getUserById, {
        method: 'GET',
        pathParams: [`?name=${localStorage.getItem('name')}`],
      });

      voteData.name = localStorage.getItem('name') ?? '';
    }

    voteData.contentId = data._id;
  });

  async function vote() {
    if (Object.values(voteData).every((value) => value)) {
      const { user, content } = await apiCall(fetch, Endpoints.postEngagement, {
        method: 'POST',
        body: JSON.stringify(voteData),
      });

      localStorage.setItem('userId', user._id);
      localStorage.setItem('name', user.aliasName);

      data = content;

      contentStore.set(content);
      isOpenModalVote = false;
    } else {
    }
  }
</script>

<div in:fade={{ duration: 200 }}>
  <Modal
    size="sm"
    autoclose={false}
    bind:open={isOpenModalVote}
    on:hide={() => (isOpenModalVote = false)}
  >
    <div class="text-right">
      <Button
        on:click={() => {
          vote();
        }}
      >
        สร้าง</Button
      >
    </div>
    <br />
    <div class="flex justify-center">
      <Img
        src={iconVote === 'upvote' ? notBongIconActive : bongIconActive}
        class="w-[14rem]"
      />
    </div>
    <br />

    <div class="text-left">
      <Textarea
        placeholder="ทำไมถึงคิดว่าไม่บ้ง"
        rows={4}
        bind:inputValue={voteData.reason}
      />
      <Input
        label="ผู้แจ้งบ้ง"
        description="คุณคือหนึ่งในผู้ร่วมระดับการศึกษาไทย"
        placeholder="ไม่ต้องใส่ชื่อจริงมานะ"
        size="md"
        customClass="h-12"
        bind:inputValue={voteData.name}
      />
    </div>
  </Modal>
</div>
