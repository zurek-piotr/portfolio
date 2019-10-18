<template>
  <div class="navigation" v-if="isPolishLanguage()">
    <router-link
      to="/#about"
      @click.native="scrollTo('#about')"
      class="navigation__link"
      >O mnie</router-link
    >
    <router-link
      to="/#projects"
      @click.native="scrollTo('#projects')"
      class="navigation__link"
      >Projekty</router-link
    >
    <router-link
      to="/#contact"
      @click.native="scrollTo('#contact')"
      class="navigation__link"
      >Kontakt</router-link
    >
  </div>

  <div class="navigation" v-else>
    <router-link
      to="/#about"
      @click.native="scrollTo('#about')"
      class="navigation__link"
      >About</router-link
    >
    <router-link
      to="/#projects"
      @click.native="scrollTo('#projects')"
      class="navigation__link"
      >Projects</router-link
    >
    <router-link
      to="/#contact"
      @click.native="scrollTo('#contact')"
      class="navigation__link"
      >Contact</router-link
    >
  </div>
</template>

<script>
import isPolishLanguage from '../scripts/Helpers';

export default {

  mounted() {
    if (this.$route.hash) {
      setTimeout(() => this.scrollTo(this.$route.hash), 1);
    }
  },
  methods: {
    isPolishLanguage,
    scrollTo(hashSelector) {
      setTimeout(() => { window.location.href = hashSelector; }, 1);
    },
  },
};
</script>

<style lang="scss" scoped >
.navigation {
  position: absolute;
  display: flex;
  justify-content: space-between;
  top: 60px;
  left: 10vw;

  &__link {
    margin-right: 20px;
    font-size: 14px;
    font-weight: 400;
    text-decoration: none;
    color: black;

    &:hover,
    &:focus {
      text-decoration: underline;
      text-decoration-color: $solid-color;
    }
  }
}

@media screen and (min-width: 2560px) {
  .navigation {
    &__link {
      font-size: 24px;
    }
  }
}
</style>
