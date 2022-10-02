<script lang="ts">
  import { Button, Img, Modal } from "flowbite-svelte";
  import { Input, Select, Textarea } from "$ui/components";
  import sendIcon from "$assets/vectors/send.svg";
  import apiCall, { Endpoints } from "$core/functions/call";
  import { onMount } from "svelte";
  import type { ContentGrid } from "$models";

  import { contentStore } from "$core";
  import { form, field } from "svelte-forms";
  import { required } from "svelte-forms/validators";

  export let isOpenModalReporting: boolean = false;
  export let data: ContentGrid;
  let reportReason = [
    {
      label: "สแปม",
      value: "spam",
    },
    {
      label: "เนื้อหาอนาจาร",
      value: "nudify",
    },
    {
      label: "ความรุนแรง",
      value: "violance",
    },
    {
      label: "ความรุนแรง",
      value: "violance",
    },
    {
      label: "คุกคามทางเพศ",
      value: "harassment",
    },
    {
      label: "ฆ่าตัวตายหรือทำร้ายตัวเอง",
      value: "suicide or self-injury",
    },
    {
      label: "ข้อมูลเท็จ",
      value: "false infomation",
    },
    {
      label: "คำพูดแสดงความเกลียดชัง",
      value: "hate speech",
    },
    {
      label: "การก่อการร้าย",
      value: "terrosism",
    },
    {
      label: "อื่นๆ",
      value: "something else",
    },
  ];
  let disabledName: boolean = false;

  const reason = field("reason", "", [required()]);
  const message = field("message", "", [required()]);
  const name = field("name", "", [required()]);
  const contentId = field("contentId", data._id, [required()]);

  const reportingForm = form(reason, name, contentId);

  onMount(async () => {
    const userId = localStorage.getItem("userId");
    if (userId) {
      const user = await apiCall(fetch, Endpoints.getUserById, {
        method: "GET",
        pathParams: [`?userId=${userId}`],
      });

      if (user) {
        disabledName = true;
        name.set(user?.aliasName ?? "");
      }
    }
  });

  async function reporting() {
    if (Object.values($reportingForm).every((value) => value)) {
      const { user } = await apiCall(fetch, Endpoints.createReporting, {
        method: "POST",
        body: JSON.stringify({
          ...$reportingForm.summary,
          message: $message.value,
        }),
      });

      if (user) {
        localStorage.setItem("userId", user._id);
        localStorage.setItem("name", user.aliasName);
      }

      isOpenModalReporting = !isOpenModalReporting;
    }
  }
</script>

<Modal
  size="sm"
  autoclose={false}
  bind:open={isOpenModalReporting}
  on:hide={() => {
    isOpenModalReporting = false;
  }}
>
  <div class="text-right invisible sm:visible">
    <Button
      disabled={!Object.values($reportingForm.summary).every((value) => value)}
      on:click={() => {
        reporting();
      }}
    >
      <Img src={sendIcon} class="w-[15px]" alt="send" /></Button
    >
  </div>
  <br />
  <div class="text-left">
    <Select
      label="เหตุผล"
      items={reportReason}
      bind:inputValue={$reason.value}
    />

    <div class={$reason.value === "something else" ? "" : "hidden"}>
      <Textarea
        placeholder="ระบุเพิ่มเติม"
        rows={4}
        bind:inputValue={$message.value}
      />
    </div>

    <Input
      label="ผู้แจ้งรายงาน"
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
      disabled={!Object.values($reportingForm.summary).every((value) => value)}
      on:click={() => {
        reporting();
      }}>รายงาน</Button
    >
  </div>
</Modal>
