<template>
  <nav class="navigation">
    <LangSwitcher class="navigation__item" />
    <router-link
      to="/#about"
      @click.native="scrollTo('#about')"
      class="navigation__link"
      >{{ $t('About') }}</router-link
    >
    <router-link
      to="/#projects"
      @click.native="scrollTo('#projects')"
      class="navigation__link"
      >{{ $t('Projects') }}</router-link
    >
    <router-link
      to="/#contact"
      @click.native="scrollTo('#contact')"
      class="navigation__link"
      >{{ $t('Contact') }}</router-link
    >
  </nav>
</template>

<script lang="ts">
import LangSwitcher from './LangSwitcher.vue';
import {Component, Vue} from 'vue-property-decorator';

@Component({
  components: {
    LangSwitcher,
  },
})
export default class Navigation extends Vue {
  public isOpen: boolean = false;

  scrollTo(hashSelector: string) {
    this.$emit('changeIsOpen', false);
    setTimeout(() => {
      window.location.href = hashSelector;
    }, 1);
  }

  mounted() {
    if (this.$route.hash) {
      setTimeout(() => this.scrollTo(this.$route.hash), 1);
    }
  }
}
</script>

<style lang="scss" scoped>
.navigation {
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
  text-align: center;
  width: 100vw;
  height: 100vh;
  overflow: hidden;

  &__item,
  &__link{
    margin-top: 25px;
    font-size: 28px;
    font-weight: 400;
    line-height: 2;
    color: black;
  }

  &__link {
    text-decoration: none;
    color: black;

    &:hover,
    &:focus {
      text-decoration: underline;
      text-decoration-color: $solid-color;
    }
  }
}

@media screen and (min-width: 1024px) {
  .navigation {
    position: absolute;
    display: flex;
    flex-direction: row;
    text-align: left;
    width: auto;
    height: auto;
    justify-content: space-between;
    top: 60px;
    left: 8vw;

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
}
@media screen and (min-width: 2560px) {
  .navigation {
    &__link {
      font-size: 24px;
    }
  }
}
</style>
