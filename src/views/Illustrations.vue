<template>
  <section class="container" id="skills">
    <div class="section-3">
      <div class="introduction" style="text-align: center">
        <h4 style="justify-content: center;">CSS Illustrations</h4>
        <p
          style="max-width: 600px; margin: 0 auto;"
        >A project that I started recently, which contains a list of illustrations that I have made using Pure CSS on Codepen. Might have used Javascript here and there to animate objects</p>
      </div>

      <div class="illustrations-container">

        <a v-for="(project, index) in projects" :key="index" :href="project.link" target="_blank">
          <p>{{index + 1}}</p>
          <h2>{{project.name}}</h2>
          <svg
            enable-background="new 0 0 24 24"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m.455 16.512 10.969 7.314c.374.23.774.233 1.152 0l10.969-7.314c.281-.187.455-.522.455-.857v-7.312c0-.335-.174-.67-.455-.857l-10.969-7.313c-.374-.23-.774-.232-1.152 0l-10.969 7.313c-.281.187-.455.522-.455.857v7.312c0 .335.174.67.455.857zm10.514 4.528-8.076-5.384 3.603-2.411 4.473 2.987zm2.062 0v-4.808l4.473-2.987 3.603 2.411zm8.907-7.314-2.585-1.727 2.585-1.728zm-8.907-10.767 8.076 5.384-3.603 2.411-4.473-2.987zm-1.031 6.602 3.643 2.438-3.643 2.438-3.643-2.438zm-1.031-6.602v4.808l-4.473 2.987-3.603-2.411zm-8.906 7.314v-.001l2.585 1.728-2.585 1.728z"
            />
          </svg>
        </a>
      </div>

      <div class="introduction" style="text-align: center">
        <p style="text-align: center; margin-top: 4rem">
          For more CSS Illustrations,
          <a
            href="https://codepen.io/shahidshaikhs"
            target="_blank"
            style="text-decoration: none"
          >click here</a>
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
          link: "https://codepen.io/shahidshaikhs/pen/mdeBMgq"
        },
        {
          name: "iPhone X Pure CSS",
          link: "https://codepen.io/shahidshaikhs/pen/ExVbxGe"
        },
        {
          name: "BigBen Pure CSS",
          link: "https://codepen.io/shahidshaikhs/pen/ZEbagRq"
        },
        {
          name: "Animate Trees using Cursor (SVG)",
          link: "https://codepen.io/shahidshaikhs/pen/jObpRNv"
        },
        {
          name: "Indian Flag Animation",
          link: "https://codepen.io/shahidshaikhs/pen/ExVdQyg"
        },
        {
          name: "Neumorphism Animation Buttons",
          link: "https://codepen.io/shahidshaikhs/pen/RwWyprB"
        },
        {
          name: "Pure CSS Phone Icon",
          link: "https://codepen.io/shahidshaikhs/pen/qBOXxBj"
        },
        {
          name: "Animated Planet SVG",
          link: "https://codepen.io/shahidshaikhs/pen/qBdQeMy"
        }
      ]
    };
  }
};
</script>

<style>
</style>
