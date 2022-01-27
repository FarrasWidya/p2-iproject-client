<template>
  <div class="ml-2 md:grid md:grid-cols-6  max-w-lg mx-auto p-8 md:p-12 my-10 rounded-lg shadow-2xl border-black bg-black">
    <section class="sidebar m-2 md:col-span-1">
      <div
        class="
          max-w-lg mx-auto p-8 md:p-12 my-10 rounded-lg shadow-2x
        "
      >
        <div>
          <div class="bg-yellow-700 underline decoration-sky-500 mb-3 text-white">Tags</div>
          <div class="bg-yellow-400 mt-2 text-white ">
            <a @click.prevent="filterTag(1)" href="">Animals</a>
          </div>
          <div class="bg-yellow-400 mt-2 text-white">
            <a @click.prevent="filterTag(2)" href="">Anime</a>
            </div>
          <div class="bg-yellow-400 mt-2 text-white">
            <a @click.prevent="filterTag(3)" href="">Funny</a>
          </div>
          <div class="bg-yellow-400 mt-2 text-white">
            <a @click.prevent="filterTag(4)" href="">Gaming</a>
          </div>
          <div class="bg-yellow-400 mt-2 text-white">
            <a @click.prevent="filterTag(5)" href="">Random</a>
          </div>
        </div>
      </div>
      
    </section>
  
  </div>
</template>

<script>

export default {
  name: "Sidebar",
  methods:{
    
    filterTag(payload){
    
      this.$store.dispatch('getContents',payload)

    }
  }
};
</script>

<style>
</style>