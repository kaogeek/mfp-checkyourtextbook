<script lang="ts">
  import { searchCategory } from '$core';
  import { TabHead, TabHeadItem, TabWrapper } from 'flowbite-svelte';
  let activeTabValue = 1;

  const handleTab = (tabValue: number, input: string) => () => {
    if (activeTabValue !== tabValue) searchCategory.set(input);
    activeTabValue = tabValue;
  };
</script>

<TabWrapper tabStyle="custom" bind:activeTabValue let:tabStyle let:tabId>
  <TabHead
    customUlClass="flex flex-wrap -mb-px justify-center"
    {tabStyle}
    {tabId}
  >
    <TabHeadItem
      id={1}
      tabStyle="underline"
      {activeTabValue}
      on:click={handleTab(1, 'latest')}>บ้งล่าสุด</TabHeadItem
    >
    <TabHeadItem
      id={2}
      tabStyle="underline"
      {activeTabValue}
      on:click={handleTab(2, 'hot')}>บ้งมาแรง</TabHeadItem
    >
    <TabHeadItem
      id={3}
      tabStyle="underline"
      {activeTabValue}
      on:click={handleTab(3, 'most')}>บ้งมากสุด</TabHeadItem
    >
  </TabHead>
</TabWrapper>
