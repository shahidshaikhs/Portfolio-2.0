<template>
  <div id="app" :class="darkTheme ? 'bg-dark' : 'bg-light'">
    <Navbar />
    <router-view />
    <Footer />
    <Floating />
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Floating from "./components/Floating";
export default {
  data() {
    return {};
  },
  components: {
    Navbar,
    Footer,
    Floating
  },
   computed: {
    darkTheme() {
      return this.$store.state.darkTheme;
    }
  },
  // created() {
  //   document.querySelector("html").classList.add("bg-dark");
  // }
};
</script>

<style>
@import "./assets/css/main.css";
</style>
