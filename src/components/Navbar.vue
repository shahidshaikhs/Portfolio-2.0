<template>
  <div>
    <nav class="nav-container" :class="darkTheme ? 'bg-dark' : 'bg-light'">
      <router-link class="logo" to="/">Shahid Shaikh</router-link>
      <button id="navbar-button" @click="toggleNavbar">
        <span></span>
        <span></span>
        <span></span>
      </button>
      <ul>
        <li class="nav-links theme-switcher">
          <svg
            @click="switchTheme"
            enable-background="new 0 0 496 496"
            viewBox="0 0 496 496"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m247.04 109c-77.87 0-142.01 63.76-142 142 0 52.349 28.664 100.29 74.803 125.12 5.056 2.721 8.197 8.071 8.197 13.964v54.919c0 26.467 21.533 48 48 48h22c26.467 0 48-21.533 48-48v-54.918c0-5.874 3.276-11.298 8.55-14.155 45.922-24.876 74.45-72.746 74.45-124.93 0-78.487-63.527-142-142-142zm10.995 352h-22c-8.822 0-16-7.178-16-16v-39h54v39c0 8.822-7.178 16-16 16zm41.308-113.21c-10.679 5.785-18.588 15.197-22.521 26.209h-59.539c-3.888-11.012-11.713-20.375-22.283-26.062-35.754-19.237-57.965-56.381-57.965-96.937 0-60.472 49.876-110.43 110.84-110 60.188 0.452 109.16 49.796 109.16 110 0 40.426-22.107 77.514-57.692 96.792zm-60.841-161.18c3.375 8.167-0.51 17.523-8.677 20.897-11.982 4.951-21.531 14.715-26.198 26.787-2.453 6.346-8.509 10.235-14.927 10.235-11.199 0-18.977-11.28-14.92-21.773 7.811-20.205 23.784-36.542 43.825-44.823 8.168-3.377 17.522 0.51 20.897 8.677zm-168.5 64.353c0 8.836-7.164 16-16 16h-38c-8.836 0-16-7.164-16-16s7.164-16 16-16h38c8.836 0 16 7.164 16 16zm52.11 125.88c6.249 6.248 6.249 16.379 0 22.627l-26.87 26.87c-3.124 3.125-7.219 4.687-11.313 4.687-14.125 0-21.423-17.205-11.313-27.313l26.87-26.87c6.247-6.25 16.378-6.25 22.626-1e-3zm109.92-319.84v-38c0-8.836 7.164-16 16-16s16 7.164 16 16v38c0 8.836-7.164 16-16 16s-16-7.164-16-16zm-159.37 41.24c-6.249-6.248-6.249-16.379 0-22.627 6.248-6.249 16.379-6.249 22.627 0l26.87 26.87c10.112 10.111 2.809 27.313-11.313 27.313-4.095 0-8.189-1.562-11.313-4.687zm301.23 4.292 26.87-26.87c6.248-6.249 16.379-6.249 22.627 0 6.249 6.248 6.249 16.379 0 22.627l-26.87 26.87c-3.124 3.125-7.219 4.687-11.313 4.687-14.126 0-21.424-17.205-11.314-27.314zm122.11 148.5c0 8.836-7.164 16-16 16h-38c-8.836 0-16-7.164-16-16s7.164-16 16-16h38c8.836 0 16 7.163 16 16zm-72.662 152.72c6.249 6.248 6.249 16.379 0 22.627-6.247 6.248-16.379 6.249-22.627 0l-26.87-26.87c-6.249-6.248-6.249-16.379 0-22.627 6.248-6.249 16.379-6.249 22.627 0z"
            />
          </svg>
        </li>
        <li class="nav-links">
          <a href="#about">About</a>
        </li>
        <li class="nav-links">
          <a href="#skills">Skills</a>
        </li>

        <li class="nav-links">
          <a href="#projects">Projects</a>
        </li>
        <li class="nav-links">
          <a href="#contact">Contact</a>
        </li>
        <li class="resume-button">
          <a target="_blank" href="/resume.pdf">Resume</a>
        </li>
      </ul>
    </nav>
    <ul class="responsive-nav" :class="navbarVisible ? 'responsive-nav-active' : ''">
      <li>
        <a href="#about" @click="navbarVisible= false">About</a>
      </li>
      <li>
        <a href="#skills" @click="navbarVisible= false">Skills</a>
      </li>

      <li>
        <a href="#projects" @click="navbarVisible= false">Projects</a>
      </li>
      <li>
        <a href="#contact" @click="navbarVisible= false">Contact</a>
      </li>
      <li>
        <a target="_blank" href="/resume.pdf" @click="navbarVisible= false">Resume</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      navbarVisible: false
    };
  },
  methods: {
    switchTheme() {
      this.$store.dispatch("changeTheme");
    },
    toggleNavbar() {
      this.navbarVisible = !this.navbarVisible;
    }
  },
  computed: {
    darkTheme() {
      return this.$store.state.darkTheme;
    }
  }
};
</script>

<style>
</style>
