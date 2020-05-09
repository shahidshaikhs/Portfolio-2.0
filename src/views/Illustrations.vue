<template>
  <section class="container" id="skills">
    <div class="section-3">
      <div class="introduction" style="text-align: center">
        <h4 style="justify-content: center;">CSS Illustrations</h4>
        <p
          style="max-width: 600px; margin: 0 auto;"
        >A project that I started recently, which contains a list of illustrations that I have made using Pure CSS on Codepen.</p>
      </div>

      <div class="illustrations-container">
        <a
          class="small-project-card-2 "
          :class="darkTheme ? 'card-dark' : 'card-light'"
          v-for="(project, index) in projects"
          :key="index"
          :href="project.link"
          target="_blank"
        >
          <div class="small-img" :class="'illus-' + project.index"></div>
          <h3>{{project.name}}</h3>
          <p>Codepen</p>
        </a>
      </div>

      <div class="introduction" style="text-align: center">
        <p style="text-align: center; margin-top: 10rem">
          For more CSS Illustrations,
          <a href="https://codepen.io/shahidshaikhs" target="_blank" style="text-decoration: none">click here</a>
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Illustrations",
   computed: {
    darkTheme() {
      return this.$store.state.darkTheme;
    }
  },
  data() {
    return {
      projects: [
        {
          name: "Pure CSS Keyboard",
          link: "https://codepen.io/shahidshaikhs/pen/mdeBMgq",
          index: 1
        },
        {
          name: "iPhone X Pure CSS",
          link: "https://codepen.io/shahidshaikhs/pen/ExVbxGe",
          index: 2
        },
        {
          name: "BigBen Pure CSS",
          link: "https://codepen.io/shahidshaikhs/pen/ZEbagRq",
          index: 3
        },
        {
          name: "Pure CSS Phone Icon",
          link: "https://codepen.io/shahidshaikhs/pen/qBOXxBj",
          index: 4
        },
        {
          name: "Animated Planet SVG",
          link: "https://codepen.io/shahidshaikhs/pen/qBdQeMy",
          index: 5
        }
      ]
    };
  }
};
</script>

<style>
</style>
