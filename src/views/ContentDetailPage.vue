<template>
  <div class="bg-slate-300">
    <navbar />
    <div>
      <div>
        <div class="bg-white max-w-lg mx-auto p-8 md:p-12 my-10 rounded-lg">
          <div>
            <div class="flex justify-start text-slate-300">
              {{ contentDetail.Tag.name }}
            </div>
            <div class="flex justify-start text-slate-300">
              {{ contentDetail.User.username }}
            </div>
            <div class="border border-2 mt-2 mb-2">
              {{ contentDetail.title }}
            </div>
          </div>
          <div>
            <img :src="contentDetail.content" width="500px" alt="" />
          </div>
          <div class="flex justify-between">
            <div class="flex">
              <div class="border border-2 border-black mr-2 mt-2">
                <button
                  @click.prevent="upvoteButton(contentDetail.id)"
                  class="m-2"
                >
                  Upvote
                </button>
              </div>
              <div class="mr-2 mt-2">
                <p class="m-2">{{ contentDetail.upvote }}</p>
              </div>
            </div>
          </div>
          <div>
            <p>Comment List :</p>
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
      return this.$store.dispatch("getContentById", this.$route.params.id);
    },
    loopingComments() {
      this.$store.dispatch("getAllComments", this.$route.params.id);
    },
    upvoteButton(payload) {
      this.$store.dispatch("postUpvote", payload).then(() => {
        
      });
      this.mappingContent();
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