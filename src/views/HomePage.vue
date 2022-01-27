<template>
<div>
    <navbar />
  <div class="parent  md:grid md:grid-cols-6  bg-slate-300">
    <sidebar/>
    <Content/>
  </div>
</div>
</template>

<script>
import Content from '../components/Content.vue';
import Navbar from "../components/Navbar.vue";
import Sidebar from '../components/Sidebar.vue';

export default {
  components: { Navbar, Sidebar, Content },
  name: "HomePage",
  created(){
    if (localStorage.access_token) {
      this.$store.state.logged = true
    }
  }
};
</script>

<style>
</style>