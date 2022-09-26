<script lang="ts">
  import { Button, Img, Modal } from 'flowbite-svelte';
  import { Input, Textarea } from '$ui/components';
  import bongIconActive from '$assets/vectors/bong-active.svg';
  import notBongIconActive from '$assets/vectors/not-bong-active.svg';
  import sendIcon from '$assets/vectors/send.svg';
  import apiCall, { Endpoints } from '$core/functions/call';
  import { onMount } from 'svelte';
  import type { ContentGrid } from '$models';

  import { contentStore } from '$core';

  export let isOpenModalVote: boolean;
  export let iconVote: string;
  export let data: ContentGrid;
  let voteData = {
    reason: '',
    status: '',
    name: '',
    contentId: '',
  };
  let disabled: boolean = false;
  let disabledName: boolean = false;

  voteData.status = iconVote;

  onMount(async () => {
    const userId = localStorage.getItem('userId');
    if (userId) {
      const user = await apiCall(fetch, Endpoints.getUserById, {
        method: 'GET',
        pathParams: [`?userId=${userId}`],
      });

      if (user) disabledName = true;
      voteData.name = user?.aliasName ?? '';
    }

    voteData.contentId = data._id;
  });

  async function vote() {
    if (Object.values(voteData).every((value) => value)) {
      disabled = true;
      const { user, content } = await apiCall(
        fetch,
        Endpoints.createEngagementComment,
        {
          method: 'POST',
          body: JSON.stringify(voteData),
        }
      );

      localStorage.setItem('userId', user._id);
      localStorage.setItem('name', user.aliasName);

      data = content;

      disabled = false;
      contentStore.set(content);
      isOpenModalVote = !isOpenModalVote;
    } else {
    }
  }
</script>

<Modal
  size="sm"
  autoclose={false}
  bind:open={isOpenModalVote}
  on:hide={() => (isOpenModalVote = false)}
>
  <div class="text-right invisible sm:visible">
    <Button
      {disabled}
      on:click={() => {
        vote();
      }}
    >
      <Img src={sendIcon} class="w-[15px]" alt="send" /></Button
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
      placeholder="ทำไมถึงคิดว่า{iconVote === 'upvote' ? 'ไม่บ้ง' : 'บ้ง'}"
      rows={4}
      bind:inputValue={voteData.reason}
    />
    <Input
      label="ผู้แจ้งบ้ง"
      description="คุณคือหนึ่งในผู้ร่วมระดับการศึกษาไทย"
      placeholder="ไม่ต้องใส่ชื่อจริงมานะ"
      size="sm"
      customClass="h-12"
      bind:disabled={disabledName}
      bind:inputValue={voteData.name}
    />
  </div>
  <div class="text-center sm:hidden">
    <Button class="w-full" on:click={() => vote()}>บันทึก</Button>
  </div>
</Modal>
