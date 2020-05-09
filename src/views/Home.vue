<template>
  <div>
    <Header />
    <main>
      <About />
      <Skills />
      <Projects />
      <SmallProjects />
      <Contact />
    </main>
  </div>
</template>

<script>
import Header from "../components/Header";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import SmallProjects from "../components/SmallProjects";
import Contact from "../components/Contact";


export default {
  name: "Home",
  components: {
    Header,
    About,
    Skills,
    Projects,
    SmallProjects,
    Contact,

  }
};
</script>
