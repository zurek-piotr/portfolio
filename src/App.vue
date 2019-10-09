<template v-cloak>
  <div>
    <HeroSection />
    <About />
    <Projects />
    <Contact />
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
@import url("https://fonts.googleapis.com/css?family=Montserrat:300,400,700&display=swap");

*,
*::after,
::before {
  margin: 0;
  padding: 0;
}

html {
  box-sizing: border-box;
  font-family: "Montserrat", sans-serif;
}

*::after,
*::before {
  box-sizing: inherit;
}

[v-cloak] {
  display: hidden;
}
</style>
