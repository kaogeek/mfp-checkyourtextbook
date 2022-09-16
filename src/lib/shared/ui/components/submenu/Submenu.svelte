<script lang="ts">
  import {
    TabContentItem,
    TabHead,
    TabHeadItem,
    TabWrapper,
  } from 'flowbite-svelte';
  import { GridContent } from '../grid-content';
  let activeTabValue3 = 1;

  const handleClick3 = (tabValue: number) => () => {
    activeTabValue3 = tabValue;
  };
</script>

<TabWrapper
  tabStyle="custom"
  bind:activeTabValue={activeTabValue3}
  let:tabStyle
  let:tabId
>
  <TabHead
    customUlClass="flex flex-wrap -mb-px justify-center"
    {tabStyle}
    {tabId}
  >
    <TabHeadItem
      id={1}
      tabStyle="underline"
      activeTabValue={activeTabValue3}
      on:click={handleClick3(1)}>ใหม่</TabHeadItem
    >
    <TabHeadItem
      id={2}
      tabStyle="underline"
      activeTabValue={activeTabValue3}
      on:click={handleClick3(2)}>โคตรบ้ง</TabHeadItem
    >
    <TabHeadItem
      id={3}
      tabStyle="underline"
      activeTabValue={activeTabValue3}
      on:click={handleClick3(3)}>บ้งตลอดกาล</TabHeadItem
    >
  </TabHead>
</TabWrapper>
