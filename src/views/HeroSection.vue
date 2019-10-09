<template>
  <div>
    <Navigation />
    <div class="HeroSection">
      <div class="HeroSection__textWrapper">
        <h1 class="HeroSection__textWrapper__header">
          Piotr
          <br />Żurek
        </h1>
        <p class="HeroSection__textWrapper__subheader">{{ subheader }}</p>
      </div>
      <div class="logo"></div>
    </div>
  </div>
</template>

<script>
import Navigation from '../components/Navigation.vue';

export default {
  data() {
    return {
      subheader: '<FrontendDeveloper />',
    };
  },
  components: {
    Navigation,
  },
};

</script>

<style lang="scss" scoped >
$headerFontSize: 130px;
.HeroSection {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  min-height: 100vh;
  max-height: 100vh;
  max-width: 100vw;

  &__textWrapper {
    display: flex;
    position: relative;
    flex-direction: column;
    align-content: center;
    margin-left: 10vw;
    margin-top: calc(#{$headerFontSize} / 2);

    &__header {
      font-size: $headerFontSize;
      font-weight: bold;
      text-transform: uppercase;
      line-height: 0.83;
    }
    &__subheader {
      margin-top: 20px;
      font-size: 20px;
      font-weight: 300;
    }
  }
}
.logo {
  display: flex;
  background: url(../assets/logo.svg) center/contain no-repeat;
  height: 85vh;
  width: 30vw;
  margin-right: 15vw;

  &:before {
    content: "";
    position: absolute;
    background: $primary-color;
    top: 0;
    right: 0;
    height: 100vh;
    width: 65vw;
    clip-path: circle(67.7% at 64% 18%);
    z-index: -1;
  }
}
</style>
