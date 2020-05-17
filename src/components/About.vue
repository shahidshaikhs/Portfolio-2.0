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

        <picture v-if="darkTheme">
          <source srcset="../assets/images/quote-1-white.webp" type="image/webp" />
          <source srcset="../assets/images/quote-1-white.png" type="image/jpeg" />
          <img class="quote-1" src="../assets/images/quote-1-white.png" alt="Quotes 1" />
        </picture>

         <picture v-if="!darkTheme">
          <source srcset="../assets/images/quote-1.webp" type="image/webp" />
          <source srcset="../assets/images/quote-1.png" type="image/jpeg" />
          <img class="quote-1" src="../assets/images/quote-1.png" alt="Quotes 1" />
        </picture>

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
