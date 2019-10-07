<template v-cloak>
  <div>
    <HeroSection />
    <About />
    <Projects />
  </div>
</template>

<script>
import HeroSection from './views/HeroSection.vue';
import About from './views/About.vue';
import Projects from './views/Projects.vue';

export default {
  components: {
    HeroSection,
    About,
    Projects,
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Montserrat:300,400,700&display=swap");

$primary_color: linear-gradient(
  167.96deg,
  #e8ea97 0%,
  #dce481 51.04%,
  #dff079 100%
);

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
