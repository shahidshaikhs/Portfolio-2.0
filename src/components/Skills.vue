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

        <picture v-if="darkTheme">
          <source srcset="../assets/images/quote-2-white.webp" type="image/webp" />
          <source srcset="../assets/images/quote-2-white.png" type="image/jpeg" />
          <img class="quote-2" src="../assets/images/quote-2-white.png" alt="Quotes 2" />
        </picture>

        <picture v-if="!darkTheme">
          <source srcset="../assets/images/quote-2.webp" type="image/webp" />
          <source srcset="../assets/images/quote-2.png" type="image/jpeg" />
          <img class="quote-2" src="../assets/images/quote-2.png" alt="Quotes 2" />
        </picture>

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
