<template>
  <div class="main bg-slate-300 md:col-span-5">
    <div
      class="bg-white max-w-lg mx-auto p-8 md:p-12 my-10 rounded-lg shadow-2xl border-black"
      v-for="content in contents"
      :key="content.id"
    >
      <div>
        <div class="flex justify-start text-slate-300 ">
          {{ content.Tag.name }}
        </div>
        <div class="flex justify-start text-slate-300">
          {{ content.User.username }}
        </div>
        <div class="border-black rounded border-2 mt-2 mb-2">{{ content.title }}</div>
      </div>
      <div>
        <img class="border-2 rounded border-black" width="500px" v-on:click.prevent="toDetail(content.id)" :src="content.content" alt="" />
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "Content",
  computed: {
    contents() {
      return this.$store.state.contents;
    },
  },
  methods: {
    loopingContent() {
       this.$store.dispatch('getContents');
       
    },
    toDetail(id){
      this.$store.dispatch('getContentById',id) 
      this.$router.push(`/contents/${id}`)
    }
  },
  created(){
    this.loopingContent()
  }
};
</script>

<style>
</style>