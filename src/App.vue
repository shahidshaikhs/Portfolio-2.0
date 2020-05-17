<template>
  <div id="app" :class="darkTheme ? 'bg-dark' : 'bg-light'">
    <div class="blower">👈🏻</div>
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
  methods: {
    displayCursor(event) {
      const blower = this.$el.querySelector(".blower");
      blower.style.left = `${event.pageX - scrollX - 6}px`;
      blower.style.top = `${event.pageY - scrollY - 7}px`;
    }
  },
  mounted() {
    window.addEventListener("mousemove", this.displayCursor);
  }
};
</script>

<style>
@import "./assets/css/main.css";
</style>
