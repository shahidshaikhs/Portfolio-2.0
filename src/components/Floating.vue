<template>
  <div>
    <div class="floating-email">
      <div class="floating-email-inner">
        <a href="mailto:shahid.sk27595@gmail.com">shahid.sk27595@gmail.com</a>
      </div>
    </div>

    <a target="_blank" href="https://www.youtube.com/user/PracProcrastination" class="floating-img">
      <img v-if="darkTheme" src="../assets/images/quote-4-white.png" alt="" srcset />
      <img v-if="!darkTheme" src="../assets/images/quote-4.png" alt="" srcset />
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
