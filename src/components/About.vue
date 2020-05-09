<template>
  <section class="container" id="about">
    <div class="grid-two">
      <div>
        <a href="https://github.com/shahidshaikhs">
          <div class="profile-img"></div>
        </a>
      </div>
      <div class="introduction">
        <h4>About Me</h4>
        <p>
          I graduated from Wilson College with a degree in Computer Science
          and I am passionate about the web and I've been creating things
          for the web since past 5 years.
        </p>
        <br />
        <p>
          <span>HTML, CSS</span> and
          <span>JavaScript</span> are my mother
          tongues. However, programming is not my only field of focus, I’m
          interested in design, UX/UI, new technologies and much more.
        </p>
        <img v-if="darkTheme" class="quote-1" src="../assets/images/quote-1-white.png" alt />
        <img v-if="!darkTheme" class="quote-1" src="../assets/images/quote-1.png" alt />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "About",
  computed: {
    darkTheme() {
      return this.$store.state.darkTheme;
    }
  }
};
</script>

<style>
</style>
