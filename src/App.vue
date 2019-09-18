<template v-cloak>
  <HeroSection />
</template>

<script>
import HeroSection from './views/HeroSection.vue';

export default {
  components: {
    HeroSection,
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
