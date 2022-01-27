<template>
  <div class="bg-slate-300">
    <navbar />
    <div>
      <div>
        <div class="bg-white max-w-lg mx-auto p-8 md:p-12 my-10 rounded-lg">
          <div>
            <div class="flex justify-start text-slate-700">
              <p>Tags: {{ contentDetail.Tag.name }}</p>
            </div>
            <div class="flex justify-start text-slate-700 italic">
              <p>Created by : @{{ contentDetail.User.username }}</p>
            </div>
            <div class="border border-2 border-black mt-2 mb-2 rounded">
              {{ contentDetail.title }}
            </div>
          </div>
          <div class="border-2 rounded border-black">
            <img :src="contentDetail.content" width="500px" alt="" />
          </div>
          <div class="flex justify-between w-full">
            <div
              class="
                rounded
                hover:bg-yellow-400
                border border-2 border-black
                mr-2
                mt-2
                w-1/4
                cursor-pointer
              "
            >
              <button
                class="hover:bg-yellow-400 m-2 cursor-pointer"
                @click.prevent="upvoteButton(contentDetail.id)"
              >
                <img
                  src="https://www.svgrepo.com/show/334337/upvote.svg"
                  alt=""
                />
              </button>
            </div>
            <div class="">
              <p class="m-2">Total Upvote: {{ contentDetail.upvote }}</p>
            </div>
            <div
              class="
                justify-end
                hover:bg-yellow-400
                border border-2 border-black
                ml-2
                mt-2
                rounded
                w-1/4
                cursor-pointer
              "
            >
              <button
                @click.prevent="deleteButton(contentDetail.id)"
                class="m-2 hover:bg-yellow-400 cursor-pointer"
              >
                Delete
              </button>
            </div>
          </div>
          <div>
            <p>Comment List</p>
            <div
              v-for="comment in commentList"
              :key="comment.id"
              class="border-2 border-slate-700 mt-2 rounded"
            >
              <img width="25px" class="m-1" :src="comment.User.avatar" alt="" />
              <p class="flex content-start mx-2">
                {{ comment.User.username }} : {{ comment.message }}
              </p>
            </div>
          </div>
        </div>
      </div>
      <comment :contentId="contentDetail.id" />
    </div>
  </div>
</template>

<script>
import Comment from "../components/Comment.vue";
import Navbar from "../components/Navbar.vue";

export default {
  name: "ProfilePage",
  components: { Navbar, Comment },
  computed: {
    contentDetail() {
      return this.$store.state.contentDetail;
    },
    commentList() {
      return this.$store.state.comments;
    },
  },
  methods: {
    mappingContent() {
      this.$store.dispatch("getContentById", this.$route.params.id);
    },
    loopingComments() {
      this.$store.dispatch("getAllComments", this.$route.params.id);
    },
    upvoteButton(payload) {
      this.$store.dispatch("postUpvote", payload);
    },
    async deleteButton(payload) {
      try {
        await this.$store.dispatch("deleteContent", payload);

        await this.$store.dispatch("getContents");
      } catch (err) {
        console.log(err);
      }
    },
  },
  created() {
    this.mappingContent();
    this.loopingComments();
  },
};
</script>

<style>
</style>