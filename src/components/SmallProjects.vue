<template>
  <section class="container">
    <div class="section-3">
      <div class="introduction">
        <h4>Other Noteworthy Projects</h4>
        <p>
          These are little projects that I probably enjoyed the most working
          on
        </p>
        <div class="small-projects-grid">
          <div
            class="small-project-card"
            :class="darkTheme ? 'card-dark' : 'card-light'"
            v-for="(project, index) in visibleList"
            :key="index"
          >
            <h3>{{project.title}}</h3>
            <p>{{project.description}}</p>
            <div class="lower">
              <div class="small-project-tech-container">
                <p v-for="(tech, index) in project.technologies" :key="index">{{tech}}</p>
              </div>

              <div class="lower__icons">
                <a
                  v-if="project.links.external.length > 0"
                  class="project-link"
                  :href="project.links.external"
                  target="_blank" rel="noopener"
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
                  target="_blank" rel="noopener"
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
                  target="_blank" rel="noopener"
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
                <router-link
                  v-if="project.links.internal.length > 0"
                  :to="project.links.internal"
                  class="project-link"
                  aria-label="Internal Link"
                  title="Internal"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    viewBox="0 0 512 512"
                    style="enable-background:new 0 0 512 512;"
                    xml:space="preserve"
                  >
                    <g>
                      <g>
                        <g>
                          <path
                            d="M510.371,226.513c-1.088-2.603-2.645-4.971-4.629-6.955l-63.979-63.979c-8.341-8.32-21.824-8.32-30.165,0
				c-8.341,8.341-8.341,21.845,0,30.165l27.584,27.584H320.013c-11.797,0-21.333,9.557-21.333,21.333s9.536,21.333,21.333,21.333
				h119.168l-27.584,27.584c-8.341,8.341-8.341,21.845,0,30.165c4.16,4.181,9.621,6.251,15.083,6.251s10.923-2.069,15.083-6.251
				l63.979-63.979c1.984-1.963,3.541-4.331,4.629-6.955C512.525,237.606,512.525,231.718,510.371,226.513z"
                          />
                          <path
                            d="M362.68,298.667c-11.797,0-21.333,9.557-21.333,21.333v106.667h-85.333V85.333c0-9.408-6.187-17.728-15.211-20.437
				l-74.091-22.229h174.635v106.667c0,11.776,9.536,21.333,21.333,21.333s21.333-9.557,21.333-21.333v-128
				C384.013,9.557,374.477,0,362.68,0H21.347c-0.768,0-1.451,0.32-2.197,0.405c-1.003,0.107-1.92,0.277-2.88,0.512
				c-2.24,0.576-4.267,1.451-6.165,2.645c-0.469,0.299-1.045,0.32-1.493,0.661C8.44,4.352,8.376,4.587,8.205,4.715
				C5.88,6.549,3.939,8.789,2.531,11.456c-0.299,0.576-0.363,1.195-0.597,1.792c-0.683,1.621-1.429,3.2-1.685,4.992
				c-0.107,0.64,0.085,1.237,0.064,1.856c-0.021,0.427-0.299,0.811-0.299,1.237V448c0,10.176,7.189,18.923,17.152,20.907
				l213.333,42.667c1.387,0.299,2.795,0.427,4.181,0.427c4.885,0,9.685-1.685,13.525-4.843c4.928-4.053,7.808-10.091,7.808-16.491
				v-21.333H362.68c11.797,0,21.333-9.557,21.333-21.333V320C384.013,308.224,374.477,298.667,362.68,298.667z"
                          />
                        </g>
                      </g>
                    </g>
                  </svg>
                </router-link>
              </div>
            </div>
          </div>
        </div>

        <div class="view-more-container" v-if="visibleList.length === 6">
          <button @click="showAllProjects" class="get-in-touch">View More</button>
        </div>
        <div class="view-more-container" v-if="visibleList.length > 6">
          <button @click="showLessProjects" class="get-in-touch">View Less</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "SmallProjects",
  computed: {
    darkTheme() {
      return this.$store.state.darkTheme;
    }
  },
  data() {
    return {
      projects: [
        {
          title: "Quotify",
          description:
            "Quotify is a small website for users to find quotes from well known individuals around the world. It is an open source project so feel free to contribute.",
          technologies: ["Vue JS", "CSS3", "JSON"],
          links: {
            github: "https://github.com/shahidshaikhs/Quotify",
            codepen: "",
            external: "https://quotifyy.netlify.app/",
            internal: ""
          }
        },
        {
          title: "Meteor Todo",
          description:
            "Meteor gives you the confidence that everything’s organized and accounted for, so you can make progress on the things that are important to you. It is a PWA made using VueJS and uses localStorage for storing data.",
          technologies: ["Vue JS"],
          links: {
            github: "https://github.com/shahidshaikhs/Meteor-Todo-",
            codepen: "",
            external: "https://meteor-todo.netlify.app/",
            internal: ""
          }
        },
        {
          title: "Pineapple Icon Pack",
          description:
            "Had published this app on Google's Playstore in 2016. Since then it has received around 2 lakh plus downloads and has a respectable rating of 4.6 on Playstore.",
          technologies: ["Java", "Android SDK"],
          links: {
            github: "",
            codepen: "",
            external:
              "https://play.google.com/store/apps/details?id=com.shahid.pineapple&hl=en_IN",
            internal: ""
          }
        },
        {
          title: "Twitter from  2006-07",
          description:
            "The old Twitter layout from 2006-07 using HTML, CSS and a bit of Javascript. The tweet section works as well.",
          technologies: ["Vue JS"],
          links: {
            github: "",
            codepen: "https://codepen.io/shahidshaikhs/pen/ZEbRwMr",
            external: "",
            internal: ""
          }
        },
        {
          title: "Personal Website V1",
          description:
            "I had made a Dashboard sort of Portfolio in the past. However, later realized it had too much content that probably not many have the time to read and hence went ahead and made a new one. The old one is still accessible.",
          technologies: ["Vue JS"],
          links: {
            github: "https://github.com/shahidshaikhs/Portfolio-Vue-",
            codepen: "",
            external: "https://shahid-old.netlify.app",
            internal: ""
          }
        },
        {
          title: "CSS Illustrations",
          description:
            "A project that I started recently, which contains a list of illustrations that I have made using Pure CSS on Codepen.",
          technologies: ["SASS", "CSS"],
          links: {
            github: "",
            codepen: "",
            external: "",
            internal: "/css-illustrations"
          }
        },
        {
          title: "LogicBoxes Helpdesk",
          description:
            "Re-designed the entire helpdesk section of the website for ease of use and practicality. This also helped users to find information related to their query on the website itself which saved time. ",
          technologies: ["HTML", "CSS"],
          links: {
            github: "",
            codepen: "",
            external: "https://support.logicboxes.com/helpdesk/",
            internal: ""
          }
        },
        {
          title: "Flipping Cards",
          description:
            "A small and very simple automatic flipping cards animation on Codepen.",
          technologies: ["HTML", "CSS", "JavaScript"],
          links: {
            github: "",
            codepen: "https://codepen.io/shahidshaikhs/pen/mZMrGW",
            external: "",
            internal: ""
          }
        },
        {
          title: "Elemental Movies",
          description:
            "Elemental Movies is a very simple Node JS app that uses API from TMDB, to showcase a list of movies.",
          technologies: ["Node JS", "Express"],
          links: {
            github: "https://github.com/shahidshaikhs/Elemental-Movies",
            codepen: "",
            external: "https://shahidshaikhs-elemental-movies.glitch.me/",
            internal: ""
          }
        },
        {
          title: "Random Color Generator",
          description: "A small and a simple app to generate random colors.",
          technologies: ["HTML", "CSS", "JavaScript"],
          links: {
            github: "",
            codepen: "https://codepen.io/shahidshaikhs/pen/dyYeNvO",
            external: "",
            internal: ""
          }
        }
      ],
      visibleList: []
    };
  },
  methods: {
    showAllProjects() {
      for (let i = 6; i < this.projects.length; i++) {
        this.visibleList.push(this.projects[i]);
      }
    },
    showLessProjects() {
      this.visibleList.splice(6, this.visibleList.length);
    }
  },
  created() {
    for (let i = 0; i < 6; i++) {
      this.visibleList.push(this.projects[i]);
    }
  }
};
</script>

<style>
</style>
