<template>
  <div>
    <navbar />

 <div class="bg-slate-300 min-h-screen flex items-center">
   <div class="w-full">
     <h2 class="text-center text-slate-700  font-bold text-2xl uppercase mt-5 mb-5 ">MAKE YOUR OWN MEME !</h2>
     <div class="bg-white p-10 rounded-lg shadow md:w-3/4 mx-auto lg:w-1/2">
       <form action=""  @submit.prevent="postMeme">

         <div class="mb-5">
           <label for="name" class="block mb-2 font-bold text-gray-600">Title</label>
           <input  v-model="addTitle" type="text" id="name" name="name" placeholder="Step 1:Fill the title !" class="border border-gray-300 shadow p-3 w-full rounded mb-">
         </div>
         <div>
           <div>
             <label for="name" class="block mb-2 font-bold text-gray-600">Template</label>
             <label for="name" class="block mb-2 font-bold text-gray-400">Step two: Choose the template !</label>
           </div>
           <div class="flex-col">
             <div class="grid grid-cols-4">
             <div v-for="template in templates" :key="template.id" class="border border-gray-300 shadow mt-2 mb-2 p-2 w-full rounded  justify-between  shadow-2x1">
                <input  type="radio"  :value="template.id" v-model="inputMeme" />
                <img class="border-black border-2 flex items-center" width="150px" :src="template.url" alt="" />
              </div>
             </div>
           </div>
         </div>

         <div class="mb-5">
           <label for="twitter" class="block mb-2 font-bold text-gray-600">Upper Text</label>
           <input  v-model="topText" type="text" id="twitter" name="twitter" placeholder="Step 3:Fill the upper text !" class="border border-gray-300 shadow p-3 w-full rounded mb-">  
         </div>

           <div class="mb-5">
           <label for="twitter" class="block mb-2 font-bold text-gray-600">Bottom Text</label>
           <input v-model="bottomText" type="text" id="twitter" name="twitter" placeholder="Step 4:Fill the bottom text !" class="border border-gray-300 shadow p-3 w-full rounded mb-">
         </div>


         <div class="mb-5">
           <label for="twitter" class=" block mb-2 font-bold text-gray-600">Tag</label>
           <select  v-model="addTag" name="" class="border border-gray-300 shadow p-3 w-full rounded mb-" id="">
             <option value="" disabled > <p  class="text-slate-200" > Step 5:Choose the tag !</p></option>
           <option class="border border-gray-300 shadow p-3 w-full rounded mb-" value="1">Animals</option>
           <option class="border border-gray-300 shadow p-3 w-full rounded mb-" value="2">Anime</option>
           <option class="border border-gray-300 shadow p-3 w-full rounded mb-" value="3">Funny</option>
           <option class="border border-gray-300 shadow p-3 w-full rounded mb-" value="4">Gaming</option>
           <option class="border border-gray-300 shadow p-3 w-full rounded mb-" value="5">Random</option>
           </select>
         </div>

       
         <button class="block w-full bg-black hover:bg-yellow-500 text-white font-bold p-4 rounded-lg">Submit</button>
       </form>
     </div>
   </div>
 </div>
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
  methods: {
    postMeme() {
      let payload = {
        inputMeme: this.inputMeme,
        addTitle: this.addTitle,
        topText: this.topText,
        bottomText: this.bottomText,
        addTag: this.addTag,
      };
      this.$store.dispatch("addNewMeme", payload);
      this.$router.push("/")
      this.$swal({
          title: "Woohooooo you created new post !",
          text: "Create Success",
          icon: "success",
          confirmButtonText: "Cool",
        });
    },
  },
  created() {
    this.$store.dispatch("getTemplateForAdd");
  },
};
</script>

<style>
</style>