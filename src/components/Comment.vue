<template>
  <div class="bg-slate-300">
    <form @submit.prevent="submitComment" action="">
      <label for="">Make a comment !</label><br />
      <textarea
        class="border-2 border-black rounded"
        v-model="addComment"
        name=""
        id=""
        cols="30"
        rows="5"
      ></textarea
      ><br />
      <button class="border-black border-2 rounded m-2">
        <span class="m-2">submit</span>
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: "Comment",
  data() {
    return {
      addComment: "",
    };
  },
  props: ["contentId"],
  
  methods: {
    submitComment() {
      this.$store.dispatch("postComment", {
        message: this.addComment,
        id: this.contentId,
      })
      .then(()=>{
         this.loopingComments()
         this.$swal({
          title: "YEAY !",
          text: "Comment Success",
          icon: "success",
          confirmButtonText: "Cool",
        });
      })
    },
    loopingComments(){
      this.$store.dispatch('getAllComments',this.$route.params.id)
     

    }
  },
  created() {
    this.$store.dispatch('getContentById',this.$route.params.id);
    this.loopingComments()
  },
};
</script>

<style>
</style>