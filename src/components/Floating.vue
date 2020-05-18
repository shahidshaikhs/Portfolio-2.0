<template>
  <div>
    <div class="floating-email">
      <div class="floating-email-inner">
        <a href="mailto:shahid.sk27595@gmail.com">shahid.sk27595@gmail.com</a>
      </div>
    </div>

    <a
      target="_blank"
      rel="noopener"
      href="https://www.youtube.com/user/PracProcrastination"
      class="floating-img"
      aria-label="Yes Theory Youtube Channel"
    >
      <picture v-if="darkTheme">
        <source srcset="../assets/images/quote-4-white.webp" type="image/webp" />
        <source srcset="../assets/images/quote-4-white.png" type="image/jpeg" />
        <img src="../assets/images/quote-4-white.png" alt="Quotes 4" />
      </picture>

      <picture v-if="!darkTheme">
        <source srcset="../assets/images/quote-4.webp" type="image/webp" />
        <source srcset="../assets/images/quote-4.png" type="image/jpeg" />
        <img src="../assets/images/quote-4.png" alt="Quotes 4" />
      </picture>
    </a>
  </div>
</template>

<script>
export default {
  name: "Floating",
  computed: {
    darkTheme() {
      return this.$store.state.darkTheme;
    }
  }
};
</script>

<style>
</style>
