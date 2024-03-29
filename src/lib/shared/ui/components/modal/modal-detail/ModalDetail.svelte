<script lang="ts">
  import type { ContentGrid, EngagementComment } from "$models";
  import {
    A,
    Card,
    Dropdown,
    DropdownItem,
    Heading,
    Img,
    Modal,
    P,
    TabHead,
    TabHeadItem,
    TabWrapper,
    ToolbarButton,
  } from "flowbite-svelte";
  import bongIconFull from "$assets/vectors/bong-full.svg";
  import notBongIconFull from "$assets/vectors/not-bong-full.svg";
  import bongIcon from "$assets/vectors/bong.svg";
  import notBongIcon from "$assets/vectors/not-bong.svg";
  import bongIconActive from "$assets/vectors/bong-active.svg";
  import notBongIconActive from "$assets/vectors/not-bong-active.svg";

  import likeIcon from "$assets/vectors/like.svg";
  import dislikeIcon from "$assets/vectors/dislike.svg";
  import likeIconActive from "$assets/vectors/like-active.svg";
  import dislikeIconActive from "$assets/vectors/dislike-active.svg";

  import zoomIcon from "$assets/vectors/zoom.svg";
  import { Common } from "$utils";
  import { LazyImage } from "svelte-lazy-image";
  import { ModalVote } from "../modal-vote";
  import { fade } from "svelte/transition";
  import { Endpoints } from "$core";
  import apiCall from "$core/functions/call";
  import InfiniteLoading, { type InfiniteEvent } from "svelte-infinite-loading";
  import Masonry from "svelte-bricks";

  export let isOpenModal: boolean = false;
  export let isOpenModalVote: boolean = false;
  export let isOpenModalReporting: boolean = false;
  export let dataModal: ContentGrid;
  let comments: EngagementComment[] = [];
  let contents: ContentGrid[] = [];
  let hashtags = dataModal.hashtag;
  let iconVote: string = "";
  let isOpenComment: boolean = false;
  let pageComment = 1;
  let pageContent = 1;
  let infiniteEventCommentCustom: InfiniteEvent;
  let activeTabValue = 1;
  let userId = localStorage.getItem("userId");
  let clientHeight: number;
  let clientHeightActive: number;
  let clientWidth: number;

  const handleTab = (tabValue: number) => () => {
    if (activeTabValue !== tabValue) {
      activeTabValue = tabValue;
      pageComment = 1;
      if (infiniteEventCommentCustom) {
        infiniteEventCommentCustom.detail.reset();
        infiniteCommentHandler(infiniteEventCommentCustom);
      }
    }
  };

  async function upvote(item: ContentGrid) {
    iconVote = "upvote";
    dataModal = item;

    isOpenModal = false;
    isOpenModalVote = true;
  }

  function downvote(item: ContentGrid) {
    iconVote = "downvote";
    dataModal = item;

    isOpenModal = false;
    isOpenModalVote = true;
  }

  function reporting(item: ContentGrid) {
    dataModal = item;

    isOpenModal = false;
    isOpenModalReporting = true;
  }

  async function like(item: EngagementComment) {
    if (!userId) {
      return;
    }

    const { comment } = await apiCall(fetch, Endpoints.createEngagementLike, {
      method: "POST",
      body: JSON.stringify({
        userId: userId,
        commentId: item._id,
        contentId: item.contentId,
        status: "like",
      }),
    });

    const index = comments.findIndex(({ _id }) => _id === comment?._id);
    if (index > -1 && comment) comments[index] = comment;
  }

  async function dislike(item: EngagementComment) {
    if (!userId) return;

    const { comment } = await apiCall(fetch, Endpoints.createEngagementLike, {
      method: "POST",
      body: JSON.stringify({
        userId: userId,
        commentId: item._id,
        contentId: item.contentId,
        status: "dislike",
      }),
    });

    const index = comments.findIndex(({ _id }) => _id === comment?._id);
    if (index > -1 && comment) comments[index] = comment;
  }

  async function loadContents(): Promise<ContentGrid[]> {
    return apiCall(fetch, Endpoints.getContent, {
      method: "GET",
      pathParams: [
        `?page=${pageContent}${userId ? `&userId=${userId}` : ""}&hashtag=${
          dataModal.hashtag
        }&exclude=${dataModal._id}`,
      ],
    });
  }

  async function loadComments(): Promise<EngagementComment[]> {
    return apiCall(fetch, Endpoints.getEngagementComment, {
      method: "GET",
      pathParams: [
        `?page=${pageComment}${userId ? `&userId=${userId}` : ""}&contentId=${
          dataModal._id
        }&type=${activeTabValue === 1 ? "downvote" : "upvote"}`,
      ],
    });
  }

  async function infiniteContentHandler(infiniteEvent: InfiniteEvent) {
    if (pageContent > 5) {
      infiniteEvent.detail.complete();
      return;
    }
    const contentsReps = await loadContents();
    pageContent += 1;

    if (!contentsReps.length) {
      infiniteEvent.detail.complete();
      return;
    }
    contents = [
      ...contents,
      ...contentsReps.filter((content) => {
        const findContent = contents.find(
          (newContent) => newContent._id === content._id
        );
        if (findContent) return false;
        return true;
      }),
    ];

    infiniteEvent.detail.loaded();
  }

  async function infiniteCommentHandler(infiniteEvent: InfiniteEvent) {
    infiniteEventCommentCustom = infiniteEvent;

    const commentsReps = await loadComments();

    if (pageComment === 1) comments = [];

    pageComment += 1;

    if (!commentsReps.length) {
      infiniteEvent.detail.complete();
      return;
    }
    comments = [
      ...comments,
      ...commentsReps.filter((comment) => {
        const findComment = comments.find(
          (newComment) => newComment._id === comment._id
        );
        if (findComment) return false;
        return true;
      }),
    ];

    infiniteEvent.detail.loaded();
  }
</script>

<div bind:clientWidth>
  <Modal
    size="lg"
    placement="top-center"
    autoclose={false}
    bind:open={isOpenModal}
    on:hide={() => (isOpenModal = false)}
  >
    <div class="text-left ml-10 mt-[0.35rem]">
      {#each hashtags ?? [] as hashtag}
        <span
          id="badge-dismiss-default"
          class="inline-flex items-center py-1 px-3 mr-1 mb-2 text-sm font-normal text-zinc-600 bg-gray-200 rounded-2xl"
        >
          {hashtag}
        </span>
      {/each}
    </div>

    <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2">
      <div class="relative">
        <LazyImage
          src={dataModal.photo.url}
          class="rounded-xl mb-2 w-full max-h-[500px]"
          placeholder="
      https://via.placeholder.com/{dataModal.photo.size}/cccccc/969696?text=+"
          alt={dataModal.title}
        />

        <div class="absolute top-2 right-2">
          <button class="w-[30px] bg-gray-100 p-2 rounded-md">
            <Img src={zoomIcon} alt="zoomIcon" />
          </button>
        </div>
        {#if isOpenComment}
          <div in:fade out:fade class="absolute top-2 left-2">
            <div class=" bg-gray-800 opacity-80 p-2 rounded-md min-w-[35px]">
              <div>
                <div class="flex justify-center">
                  <Img src={bongIconFull} class="w-[.9rem]" />
                </div>
                <div class="text-white text-[10px]">
                  {Common.formatShort(dataModal.downvoteCount)}
                </div>
              </div>
              <div class="mt-1">
                <div class="flex justify-center">
                  <Img src={notBongIconFull} class="w-[.9rem]" />
                </div>
                <div class="text-white text-[10px]">
                  {Common.formatShort(dataModal.upvoteCount)}
                </div>
              </div>
            </div>
          </div>
        {/if}
      </div>
      <div class="text-left">
        <div
          bind:clientHeight
          class="{!isOpenComment
            ? `h-[${clientHeight}px]`
            : 'h-0'} overflow-hidden transition-all duration-300"
        >
          <Heading customSize="" tag="h4" class="mb-2"
            >{dataModal.title}</Heading
          >
          <div class="mb-2">
            <div class="text-[13px] mb-2">
              โดย&nbsp;<A size="sm">{dataModal.author}</A>
            </div>
            <P
              class="mb-3 text-[16px]"
              align="left"
              size="sm"
              space="normal"
              weight="light"
              opacity={1}
            >
              {dataModal.description}
            </P>
          </div>

          <hr />

          <div class="grid grid-cols-2 gap-3 my-4">
            <div
              on:click={() => downvote(dataModal)}
              class="bg-[#FF6711] text-white flex flex-col items-center justify-center transition duration-150 ease-out cursor-pointer rounded-lg shadow-md"
            >
              <div class="flex py-2">
                <Img src={bongIconFull} class="w-[1.5rem]" />&nbsp;บ้งไม่ไหว
              </div>
              <div
                class="bg-[#EA5908] min-h-[26px] text-[12px] py-1 w-full text-center rounded-b-lg"
              >
                {dataModal.downvoteCount
                  ? Common.formatShort(dataModal.downvoteCount)
                  : "ไม่มี"}
              </div>
            </div>

            <div
              on:click={() => upvote(dataModal)}
              class="bg-[#44A5FF] text-white flex flex-col items-center justify-center transition duration-150 ease-out cursor-pointer rounded-lg shadow-md"
            >
              <div class="flex py-2">
                <Img src={notBongIconFull} class="w-[1.5rem]" />&nbsp;ไม่บ้ง
              </div>
              <div
                class="bg-[#3794EA] min-h-[26px] text-[12px] py-1 w-full text-center rounded-b-lg"
              >
                {dataModal.upvoteCount
                  ? Common.formatShort(dataModal.upvoteCount)
                  : "ไม่มี"}
              </div>
            </div>
          </div>
          <div class="grid grid-cols-2 gap-3 my-4">
            <div
              on:click={() => reporting(dataModal)}
              class="bg-gray-300 text-white flex flex-col items-center justify-center transition duration-150 ease-out cursor-pointer rounded-lg shadow-md"
            >
              <div class="flex py-2">รายงาน</div>
            </div>
          </div>
        </div>

        <button
          type="button"
          class="w-full text-white {isOpenComment
            ? 'bg-gray-400 hover:bg-gray-600 focus:ring-gray-200 text-white'
            : 'bg-white hover:bg-white focus:ring-gray-100 text-[#44A5FF]'} focus:outline-none focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 mb-2"
          on:click={() => {
            isOpenComment = !isOpenComment;

            if (isOpenComment) clientHeightActive = clientHeight;
            if (!isOpenComment) clientHeight = clientHeightActive;
          }}
          >{isOpenComment
            ? "ซ่อนความคิดเห็นทั้งหมด"
            : `ความคิดเห็นทั้งหมด (${
                dataModal.downvoteCount + dataModal.upvoteCount
              })`}</button
        >

        {#if isOpenComment}
          <div
            class="{isOpenComment
              ? 'h-90%'
              : 'h-0'} overflow-hidden transition duration-300"
          >
            <div in:fade class="mt-4 p-3 bg-gray-200 rounded-lg">
              <TabWrapper tabStyle="custom" let:tabStyle {activeTabValue}>
                <TabHead
                  tabId
                  {tabStyle}
                  customUlClass="flex flex-row justify-around bg-gray-100 rounded-md mb-2"
                >
                  <TabHeadItem
                    id={1}
                    {activeTabValue}
                    tabStyle="custom"
                    customLiClass="w-[50%] text-[14px]"
                    customActiveClass="flex w-full items-center justify-center p-2.5 bg-white rounded-md transition-all duration-200"
                    customInActiveClass="flex w-full items-center justify-center p-2.5 bg-transparent rounded-md transition-all duration-200 text-zinc-300"
                    on:click={handleTab(1)}
                  >
                    <Img
                      src={activeTabValue === 1 ? bongIconActive : bongIcon}
                      class="w-[1.5rem]"
                    />&nbsp;บ้ง</TabHeadItem
                  >
                  <TabHeadItem
                    id={2}
                    {activeTabValue}
                    tabStyle="custom"
                    customLiClass="w-[50%] text-[14px]"
                    customActiveClass="flex w-full items-center justify-center p-2.5 bg-white rounded-md transition-all duration-200"
                    customInActiveClass="flex w-full items-center justify-center p-2.5 bg-transparent rounded-md transition-all duration-200 text-zinc-300"
                    on:click={handleTab(2)}
                  >
                    <Img
                      src={activeTabValue === 2
                        ? notBongIconActive
                        : notBongIcon}
                      class="w-[1.5rem]"
                    />&nbspไม่บ้ง</TabHeadItem
                  >
                </TabHead>
              </TabWrapper>
              {#if activeTabValue == 1}
                <Heading
                  customSize=""
                  tag="h5"
                  color="text-zinc-400"
                  class="my-4">ข้อเสนอเพื่อนๆ ในการแก้ความบ้ง</Heading
                >
              {:else}
                <Heading
                  customSize=""
                  tag="h5"
                  color="text-zinc-400"
                  class="my-4">เหตุผลที่คิดว่าเรื่องนี้ไม่บ้ง</Heading
                >
              {/if}

              <div class="min-h-[30vh] overflow-y-scroll">
                {#each comments as comment}
                  <Card
                    size="xl"
                    padding="sm"
                    class="rounded-lg border-none p-3 mb-2"
                  >
                    <div class="flex align-center">
                      <Heading customSize="text-sm" tag="h6" class=""
                        >{comment.author}</Heading
                      >
                    </div>
                    <P
                      class="mt-2 text-[16px]"
                      color="text-zinc-500"
                      align="left"
                      size="sm"
                      space="normal"
                      weight="normal"
                      opacity={1}
                    >
                      {comment.reason}
                    </P>

                    <div class="flex justify-between mt-2">
                      <div class="flex items-center text-zinc-400 text-[12px]">
                        {Common.convertDateToString(
                          Common.convertDateRelative(
                            new Date(comment.createdAt),
                            new Date()
                          )
                        )}
                      </div>
                      <div class="flex gap-2">
                        <div
                          on:click={() => like(comment)}
                          class="flex text-zinc-400 text-[12px] items-center gap-1 select-none cursor-pointer rounded-md p-1 hover:bg-gray-100 active:bg-gray-200"
                        >
                          <Img
                            src={comment.like ? likeIconActive : likeIcon}
                            class="w-[12px]"
                          />
                          <span class={comment.like ? "text-[#44A5FF]" : ""}
                            >{Common.formatCurrency(comment.likeCount)}</span
                          >
                        </div>
                        <div
                          on:click={() => dislike(comment)}
                          class="flex text-zinc-400 text-[12px] items-center gap-1 select-none cursor-pointer rounded-md p-1 hover:bg-gray-100 active:bg-gray-200"
                        >
                          <Img
                            src={comment.dislike
                              ? dislikeIconActive
                              : dislikeIcon}
                            class="w-[13px]"
                          /><span
                            class={comment.dislike ? "text-[#FA2A4F]" : ""}
                            >{Common.formatCurrency(comment.dislikeCount)}</span
                          >
                        </div>
                      </div>
                    </div>
                  </Card>
                {/each}
                <InfiniteLoading on:infinite={infiniteCommentHandler} />
              </div>
            </div>
          </div>
        {/if}
      </div>
    </div>
    {#if isOpenComment}
      <div class="text-left" in:fade>
        <Heading tag="h6" class="mb-3">เรื่องบ้งอื่นๆ ที่คุณอาจสนใจ</Heading>
        <Masonry
          let:item
          items={contents}
          idKey={"_id"}
          minColWidth={200}
          maxColWidth={clientWidth > 640 ? 300 : undefined}
          gap={15}
          animate={true}
          duration={500}
        >
          <div
            in:fade
            out:fade
            class="max-w-sm bg-white rounded-2xl shadow-md hover:scale-[1.02] transition duration-200 cursor-pointer"
          >
            <section
              on:click={() => {
                if (isOpenModal) isOpenModal = false;
                dataModal = item;
              }}
            >
              <LazyImage
                src={item.photo.url}
                class="rounded-t-2xl mb-2 w-full"
                placeholder="
  https://via.placeholder.com/{item.photo.size}/cccccc/969696?text=+"
                alt={item.title}
              />
              <div class="p-3 pt-1">
                <P
                  align="left"
                  size="sm"
                  space="normal"
                  weight="normal"
                  opacity={1}
                  class="select-none text-[16px]">{item.title}</P
                >
              </div>
            </section>
          </div>
        </Masonry>
        <br />
        <InfiniteLoading on:infinite={infiniteContentHandler} />
      </div>
    {/if}
  </Modal>
</div>
