<template>
  <section class="container" id="projects">
    <div class="section-3">
      <div class="introduction">
        <h4>Projects</h4>
        <p>
          These are the projects that I have worked on in the past or the
          ones that I am presently working on. Feel free to reach out to me
          if you have any questions regarding any of these.
        </p>
        <div class="project-container">
          <div
            class="project-card"
            :class="darkTheme ? 'card-dark' : 'card-light'"
            v-for="(project, index) in projects"
            :key="index"
          >
            <div class="left" :class="'project-' + project.index"></div>
            <div class="right">
              <h3>{{project.title}}</h3>
              <p>{{project.description}}</p>
              <div class="skills-container">
                <p v-for="(tech, index) in project.technologies" :key="index">{{tech}}</p>
              </div>
            </div>

            <div class="project-icons-container">
              <a
                v-if="project.links.external.length > 0"
                class="project-link"
                :href="project.links.external"
                target="_blank"
                aria-label="External Link"
                title="External"
              >
                <svg
                  x="0px"
                  y="0px"
                  viewBox="0 0 283.922 283.922"
                  style="enable-background: new 0 0 283.922 283.922;"
                  xml:space="preserve"
                >
                  <g>
                    <path
                      d="M266.422,0h-97.625c-9.65,0-17.5,7.851-17.5,17.5c0,9.649,7.85,17.5,17.5,17.5h55.377l-92.375,92.374
          c-3.307,3.305-5.127,7.699-5.127,12.375c0,4.676,1.819,9.069,5.125,12.371c3.306,3.309,7.699,5.13,12.375,5.13
          c4.674,0,9.069-1.82,12.376-5.127l92.374-92.375v55.377c0,9.649,7.851,17.5,17.5,17.5c9.649,0,17.5-7.851,17.5-17.5V17.5
          C283.922,7.851,276.071,0,266.422,0z"
                    />
                    <path
                      d="M201.137,253.922H30V82.785h128.711l30-30H15c-8.284,0-15,6.716-15,15v201.137c0,8.284,6.716,15,15,15h201.137
          c8.284,0,15-6.716,15-15V95.211l-30,30V253.922z"
                    />
                  </g>
                </svg>
              </a>
              <a
                v-if="project.links.github.length > 0"
                :href="project.links.github"
                target="_blank"
                class="project-link"
                aria-label="Github"
                title="Github"
              >
                <svg
                  enable-background="new 0 0 24 24"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="m12 .5c-6.63 0-12 5.28-12 11.792 0 5.211 3.438 9.63 8.205 11.188.6.111.82-.254.82-.567 0-.28-.01-1.022-.015-2.005-3.338.711-4.042-1.582-4.042-1.582-.546-1.361-1.335-1.725-1.335-1.725-1.087-.731.084-.716.084-.716 1.205.082 1.838 1.215 1.838 1.215 1.07 1.803 2.809 1.282 3.495.981.108-.763.417-1.282.76-1.577-2.665-.295-5.466-1.309-5.466-5.827 0-1.287.465-2.339 1.235-3.164-.135-.298-.54-1.497.105-3.121 0 0 1.005-.316 3.3 1.209.96-.262 1.98-.392 3-.398 1.02.006 2.04.136 3 .398 2.28-1.525 3.285-1.209 3.285-1.209.645 1.624.24 2.823.12 3.121.765.825 1.23 1.877 1.23 3.164 0 4.53-2.805 5.527-5.475 5.817.42.354.81 1.077.81 2.182 0 1.578-.015 2.846-.015 3.229 0 .309.21.678.825.56 4.801-1.548 8.236-5.97 8.236-11.173 0-6.512-5.373-11.792-12-11.792z"
                  />
                </svg>
              </a>
              <a
                v-if="project.links.codepen.length > 0"
                :href="project.links.codepen"
                target="_blank"
                class="project-link"
                aria-label="Codepen"
                title="Codepen"
              >
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
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Projects",
  computed: {
    darkTheme() {
      return this.$store.state.darkTheme;
    }
  },
  data() {
    return {
      projects: [
        {
          index: 1,
          title: "Cashmen - Website",
          description:
            "Cashmen is a modern gadget selling service to sell used smartphones within seconds. My role was to design and develop the entire website and also create a backend REST APIservice using Node JS and MongoDB.",
          technologies: ["Vue JS", "Node JS", "MongoDB", "Tailwind"],
          links: {
            github: "",
            codepen: "",
            external: "http://cashmen.in/"
          }
        },
        {
          index: 2,
          title: "Scrittor - Note App",
          description:
            "Scrittor helps with a simple and easy to use interface. There are not extra unnecessary features to make everything super complex. App primarily focuses on storing notes categorically and keeping interface as simple as possible. The app was made using Android SDK",
          technologies: ["Java", "Android SDK"],
          links: {
            github: "",
            codepen: "",
            external:
              "https://play.google.com/store/apps/details?id=com.shahid.nid"
          }
        },
        {
          index: 3,
          title: "Pulse Website & Emails",
          description:
            "Redesigned the Emails and Website for a company where users can know the status of the platform including Maintenance & Announcements. Both the website and the emails are mobile responsive and were made using CSS preprocessor named SASS.",
          technologies: ["HTML", "SASS", "CSS3", "Javascript"],
          links: {
            github: "",
            codepen: "",
            external: "https://pulse.myorderbox.com/"
          }
        }
      ]
    };
  }
};
</script>

<style>
</style>
