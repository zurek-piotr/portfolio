<script setup lang="ts">
import HeroSection from './views/HeroSectionView.vue'
import About from './views/AboutView.vue'
import Projects from './views/ProjectsView.vue'
import Contact from './views/ContactView.vue'
import Footer from './views/FooterView.vue'
</script>

<template v-cloak>
  <div class="sectionsWrapper" data-app>
    <HeroSection />
    <About id="about" />
    <Projects id="projects" />
    <Contact id="contact" />
    <Footer id="contact" />
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Montserrat:300,400,700&display=swap');
@import './scss/_variables.scss';

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
</style>
