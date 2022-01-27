<template>
  <nav class="flex items-center justify-between flex-wrap bg-black p-6">
    <div class="flex items-center flex-shrink-0 text-white mr-6">
      <a href="" @click.prevent="toHome">
        <img src="../assets/logos.jpeg" width="60px" height="50px" alt="" />
      </a>
    </div>

    <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
      <div class="text-sm lg:flex-grow text-white">
        <p>{{ timezone.datetime }}</p>
        <p>{{ timezone.requested_location }}</p>
      </div>
      <div v-if="logged" class="text-sm lg:flex-grow">
        <a
          @click.prevent="toAdd"
          href="#responsive-header"
          class="
            inline-block
              text-sm
              px-4
              py-2
              leading-none
              border
              rounded
              text-white
              border-white
              hover:border-transparent hover:text-black-500 hover:bg-yellow-500
              mt-4
              lg:mt-0
          "
        >
          ADD POST
        </a>
      </div>
      <div>
        <div v-if="logged">
          <a
            href="#"
            @click.prevent="toLogout"
            class="
              inline-block
              text-sm
              px-4
              py-2
              leading-none
              border
              rounded
              text-white
              border-white
              hover:border-transparent hover:text-black-500 hover:bg-yellow-500
              mt-4
              lg:mt-0
            "
            >SIGN OUT</a
          >
        </div>
        <div v-if="!logged">
          <a
            href="#"
            @click.prevent="toLogin"
            class="
              inline-block
              text-sm
              px-4
              py-2
              leading-none
              border
              rounded
              text-white
              border-white
              hover:border-transparent hover:text-black-500 hover:bg-black
              mt-4
              lg:mt-0
            "
            >SIGN IN</a
          >
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  computed: {
    timezone() {
      return this.$store.state.timezone;
    },
    logged(){
      return this.$store.state.logged
    }
  },
  methods: {
    toHome() {
      return this.$router.push("/").catch(() => {});
    },
    toAdd() {
      return this.$router.push("/form").catch(() => {});
    },
    toProfile() {
      return this.$router.push("/Profile").catch(() => {});
    },
    toLogin() {
      return this.$router.push("/login").catch(() => {});
    },
    toLogout() {
      localStorage.clear();
      return this.$router.push("/login").catch(()=>{})
    },
  },
  created() {
    if (localStorage.access_token) {
      this.$store.commit('MUTATE_LOGGED',true);
    }

    this.$store.dispatch("getTimezone");
  },
  updated(){
    if (localStorage.access_token) {
      this.$store.commit('MUTATE_LOGGED',true);
    }
  }
};
</script>

<style>
</style>