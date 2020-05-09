<template>
  <section class="container" id="skills">
    <div class="section-2">
      <div class="introduction">
        <h4>Skills</h4>
        <p>
          I love to learn new things and experiment with new technologies.
          Below are the few skills that I use on regular basis to create new
          projects on the web.
        </p>
        <div class="skills-container">
          <p>HTML</p>
          <p>CSS3</p>
          <p>JavaScript ES6</p>
          <p>SASS</p>
          <p>Vue JS</p>
          <p>Node JS</p>
          <p>Git</p>
          <p>MongoDB</p>
          <p>SQL</p>
        </div>
        <img v-if="darkTheme" class="quote-2" src="../assets/images/quote-2-white.png" alt srcset />
        <img v-if="!darkTheme" class="quote-2" src="../assets/images/quote-2.png" alt srcset />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Skills",
  computed: {
    darkTheme() {
      return this.$store.state.darkTheme;
    }
  }
};
</script>

<style>
</style>
