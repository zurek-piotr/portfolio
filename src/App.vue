<template v-cloak>
  <div class="sectionsWrapper">
    <HeroSection />
    <About id="about" />
    <Projects id="projects" />
    <Contact id="contact" />
  </div>
</template>

<script>
import HeroSection from './views/HeroSection.vue';
import About from './views/About.vue';
import Projects from './views/Projects.vue';
import Contact from './views/Contact.vue';

export default {
  components: {
    HeroSection,
    About,
    Projects,
    Contact,
  },
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Montserrat:300,400,700&display=swap');

*,
*::after,
::before {
  margin: 0;
  padding: 0;
}

html {
  box-sizing: border-box;
  font-family: 'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
  scroll-behavior: smooth;
}

*::after,
*::before {
  box-sizing: inherit;
}

input,
textarea,
select,
button,
::placeholder {
  font-family: inherit;
}

[v-cloak] {
  display: hidden;
}

// .sectionsWrapper {
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   max-width: 80vw;
//   margin-left: 10vw;
// }
</style>
