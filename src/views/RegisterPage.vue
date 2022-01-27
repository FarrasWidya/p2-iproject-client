<template>
  <div>
    <navbar />
    <body
      class="body-bg min-h-screen pt-12 md:pt-20 pb-6 px-2 md:px-0  bg-slate-300"
      style="font-family: 'Lato', sans-serif"
    >
     

      <main
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
        <section>
          <h3 class="font-bold text-2xl">MEME IT !</h3>
          <p class="text-gray-600 pt-2">Sign Up Here :D</p>
        </section>

        <section class="mt-10">
          <form
            @submit.prevent="signUpForm"
            class="flex flex-col"
            method="POST"
            action="#"
          >
            <div class="mb-6 pt-3 rounded bg-gray-200">
              <label
                class="block text-gray-700 text-sm font-bold mb-2 ml-3"
                for="email"
                >Email</label
              >
              <input
                v-model="registerEmail"
                type="text"
                id="email"
                class="
                  bg-gray-200
                  rounded
                  w-full
                  text-gray-700
                  focus:outline-none
                  border-b-4 border-gray-300
                  focus:border-yellow-400
                  transition
                  duration-500
                  px-3
                  pb-3
                "
              />
            </div>
            <div class="mb-6 pt-3 rounded bg-gray-200">
              <label
                class="block text-gray-700 text-sm font-bold mb-2 ml-3"
                for="password"
                >Password</label
              >
              <input
                v-model="registerPassword"
                type="password"
          
                class="
                  bg-gray-200
                  rounded
                  w-full
                  text-gray-700
                  focus:outline-none
                  border-b-4 border-gray-300
                  focus:border-yellow-400
                  transition
                  duration-500
                  px-3
                  pb-3
                "
              />
            </div>
            <div class="mb-6 pt-3 rounded bg-gray-200">
              <label
                class="block text-gray-700 text-sm font-bold mb-2 ml-3"
                for="password"
                >Username</label
              >
              <input
                v-model="registerUsername"
                type="text"
        
                class="
                  bg-gray-200
                  rounded
                  w-full
                  text-gray-700
                  focus:outline-none
                  border-b-4 border-gray-300
                  focus:border-yellow-400
                  transition
                  duration-500
                  px-3
                  pb-3
                "
              />
            </div>
            <div class="mb-6 pt-3 rounded bg-gray-200">
              <label
                class="block text-gray-700 text-sm font-bold mb-2 ml-3"
                for="password"
                >Gender</label
              >
              <select
                v-model="registerGender"
                class="
                  bg-gray-200
                  rounded
                  w-full
                  text-gray-700
                  focus:outline-none
                  border-b-4 border-gray-300
                  focus:border-yellow-400
                  transition
                  duration-500
                  px-3
                  pb-3
                "
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
            <div class="mb-6 pt-3 rounded bg-gray-200">
              <label
                class="block text-gray-700 text-sm font-bold mb-2 ml-3"
                for="password"
                >Bio</label
              >
              <input
                v-model="registerBio"
                type="text"
                class="
                  bg-gray-200
                  rounded
                  w-full
                  text-gray-700
                  focus:outline-none
                  border-b-4 border-gray-300
                  focus:border-yellow-400
                  transition
                  duration-500
                  px-3
                  pb-3
                "
              />
            </div>

            <button
           
              class="
                bg-yellow-300
                hover:bg-yellow-400
                text-white
                font-bold
                py-2
                rounded
                shadow-lg
                hover:shadow-xl
                transition
                duration-200
              "
              type="submit"
            >
              Sign Up
            </button>
          </form>

        </section>
      </main>
      <div class="max-w-lg mx-auto text-center mt-12 mb-6">
        <p>
          Already have an account?
          <a  @click.prevent="toSignIn"  href="#" class="font-bold hover:underline">Sign in</a>.
        </p>
      </div>

  
    </body>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
export default {
  components: { Navbar },
  name: "RegisterPage",
  data() {
    return {
      registerEmail: "",
      registerPassword: "",
      registerUsername: "",
      registerGender: "",
      registerBio: "",
    };
  },
  methods: {
    signUpForm() {
      this.$store
        .dispatch("postRegister", {
          email: this.registerEmail,
          password: this.registerPassword,
          username: this.registerUsername,
          gender: this.registerGender,
          bio: this.registerBio,
        })
        .then(() => {
          this.$router.push("/login");
        })
        .catch((err) => {
          console.log(err);
        });
    },
    toSignIn(){
      this.$router.push('/login')
    }
  },
};

</script>

<style>
</style>