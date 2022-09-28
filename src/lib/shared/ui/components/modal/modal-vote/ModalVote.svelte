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

  export let isOpenModalVote: boolean = false;
  export let iconVote: string;
  export let data: ContentGrid;
  let disabledName: boolean = false;

  import { form, field } from 'svelte-forms';
  import { required } from 'svelte-forms/validators';

  const reason = field('reason', '', [required()]);
  const status = field('status', iconVote, [required()]);
  const name = field('name', '', [required()]);
  const contentId = field('contentId', data._id, [required()]);

  const voteForm = form(reason, status, name, contentId);

  onMount(async () => {
    const userId = localStorage.getItem('userId');
    if (userId) {
      const user = await apiCall(fetch, Endpoints.getUserById, {
        method: 'GET',
        pathParams: [`?userId=${userId}`],
      });

      if (user) {
        disabledName = true;
        name.set(user?.aliasName ?? '');
      }
    }
  });

  async function vote() {
    if (Object.values($voteForm).every((value) => value)) {
      const { user, content } = await apiCall(
        fetch,
        Endpoints.createEngagementComment,
        {
          method: 'POST',
          body: JSON.stringify($voteForm.summary),
        }
      );

      if (user) {
        localStorage.setItem('userId', user._id);
        localStorage.setItem('name', user.aliasName);
      }

      data = content;

      contentStore.set(content);
      isOpenModalVote = !isOpenModalVote;
    }
  }
</script>

<Modal
  size="sm"
  autoclose={false}
  bind:open={isOpenModalVote}
  on:hide={() => {
    isOpenModalVote = false;
  }}
>
  <div class="text-right invisible sm:visible">
    <Button
      disabled={!Object.values($voteForm.summary).every((value) => value)}
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
      bind:inputValue={$reason.value}
    />
    <Input
      label="ผู้แจ้งบ้ง"
      description="คุณคือหนึ่งในผู้ร่วมระดับการศึกษาไทย"
      placeholder="ไม่ต้องใส่ชื่อจริงมานะ"
      size="md"
      customClass="h-13"
      bind:disabled={disabledName}
      bind:inputValue={$name.value}
    />
  </div>
  <div class="text-center sm:hidden">
    <Button
      class="w-full"
      disabled={!Object.values($voteForm.summary).every((value) => value)}
      on:click={() => vote()}>บันทึก</Button
    >
  </div>
</Modal>
