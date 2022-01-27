<template>
  <div>
    <navbar />
    <form
      action=""
      class="bg-slate-300 "
      @submit.prevent="postMeme"
    >
      <label class="m-2" for="">Title</label><br />
      <input
        type="text"
        v-model="addTitle"
        class="border-2 border-black"
      /><br />
      <label for="">Top Text</label><br />
      <input
        v-model="topText"
        type="text"
        name=""
        class="border-2 border-black"
        id=""
      /><br />
      <label for="">Bottom Text</label><br />
      <input
        v-model="bottomText"
        type="text"
        name=""
        class="border-2 border-black"
        id=""
      /><br />
      <label class="m-2" for="">Content</label><br />
      <div
        class="
          bg-white
          max-w-lg
          mx-auto
          p-8
          md:p-12
          my-10
          rounded-lg
          shadow-2xl
        "
      >
        <div v-for="template in templates" :key="template.id">
          <input type="radio" :value="template.id" v-model="inputMeme" />
          <img class="flex" width="200px" :src="template.url" alt="" />
        </div>
      </div>
      <label for="">Tag</label><br />
      <select v-model="addTag" class="border-2 border-black" name="" id="">
        <option value="1">Animal</option>
        <option value="2">Anime</option>
        <option value="3">Funny</option>
        <option value="4">Gaming</option>
        <option value="5">Random</option></select
      ><br />
      <button class="border-2 border-black m-2 rounded">
        <p class="m-1">Submit</p>
      </button>
    </form>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
export default {
  name: "AddPostPage",
  components: { Navbar },
  data() {
    return {
      inputMeme: "",
      addTitle: "",
      addTag: "",
      topText: "",
      bottomText: "",
    };
  },
  computed: {
    templates() {
      return this.$store.state.templates;
    },
  },
  methods:{
  postMeme(){
    let payload ={
      inputMeme : this.inputMeme,
      addTitle : this.addTitle,
      topText : this.topText,
      bottomText : this.bottomText,
      addTag : this.addTag
    }
      this.$store.dispatch('addNewMeme',payload)
      this.$router.push('/')
      
  }

  },
  created() {
    this.$store.dispatch("getTemplateForAdd");
  },
};
</script>

<style>
</style>