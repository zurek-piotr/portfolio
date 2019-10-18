<template>
  <div>
    <Navigation v-show="screenWidth >= 1024" />

    <div class="heroSection">
      <button class="heroSection__hamburgerMenu" v-show="screenWidth < 1024">
        <div class="heroSection__hamburgerMenu__inner"></div>
      </button>
      <div class="heroSection__textWrapper">
        <h1 class="heroSection__textWrapper__header">
          Piotr
          <br />Żurek
        </h1>
        <p class="heroSection__textWrapper__subheader">{{ subheader }}</p>
      </div>
      <div class="heroSection__logo"></div>
    </div>
  </div>
</template>

<script>
import Navigation from '../components/Navigation.vue';

export default {
  data() {
    return {
      subheader: '<FrontendDeveloper />',
      screenWidth: window.innerWidth,
    };
  },
  components: {
    Navigation,
  },
  methods: {
    setScreenWidth() {
      this.screenWidth = window.innerWidth;
    },
  },
  created() {
    window.addEventListener('resize', this.setScreenWidth);
  },
  destroyed() {
    window.addEventListener('resize', this.setScreenWidth);
  },
};

</script>

<style lang="scss" scoped >
$headerFontSize: 72px;
.heroSection {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  max-width: 100vw;
  background: $primary-color;

  &__logo {
    background: url(../assets/projectsSrc/logo.svg) center/contain no-repeat;
    height: 45vh;
    width: 55vw;
    order: 1;
  }

  &__textWrapper {
    flex-direction: column;
    align-content: center;
    margin-top: calc(#{$headerFontSize} / 2);
    order: 2;

    &__header {
      font-size: $headerFontSize;
      font-weight: bold;
      text-transform: uppercase;
      line-height: 0.83;
    }

    &__subheader {
      margin-top: 20px;
      font-size: 24px;
      font-weight: 300;
    }
  }

  &__hamburgerMenu {
    position: absolute;
    top: 40px;
    right: 40px;
    padding: 15px;
    border: none;
    background: none;
    cursor: pointer;

    &__inner {
      position: relative;

      &,
      &::before,
      &::after {
        height: 3px;
        width: 30px;
        border-radius: 10px;
        background: #000;
      }

      &::before {
        position: absolute;
        content: "";
        top: -7px;
        left: 0;
      }

      &::after {
        position: absolute;
        content: "";
        top: 7px;
        left: 0;
      }
    }
  }
}

@media screen and (min-width: 1024px) {
  $headerFontSize: 90px;
  .heroSection {
    flex-direction: row;
    justify-content: space-between;
    background: none;

    &__textWrapper {
      margin-left: 8vw;
      margin-top: calc(#{$headerFontSize} / 2);
      order: 1;

      &__header {
        font-size: $headerFontSize;
      }

      &__subheader {
        font-size: 20px;
      }
    }
    &__logo {
      height: 75vh;
      width: 30vw;
      margin-right: 15vw;
      order: 2;

      &:before {
        content: "";
        position: absolute;
        background: $primary-color;
        top: 0;
        right: 0;
        height: 100vh;
        width: 65vw;
        clip-path: circle(72.7% at 73% 21%);
        z-index: -1;
      }
    }
  }
}

@media screen and (min-width: 1440px) {
  $headerFontSize: 120px;
  .heroSection {
    &__textWrapper {
      margin-left: 10vw;
      margin-top: calc(#{$headerFontSize} / 2);

      &__header {
        font-size: $headerFontSize;
      }
    }

    &__logo {
      height: 85vh;
      width: 30vw;

      &::before {
        clip-path: circle(67.7% at 65% 16%);
      }
    }
  }
}

@media screen and (min-width: 2560px) {
  $headerFontSize: 200px;
  .heroSection {
    &__textWrapper {
      margin-left: 10vw;
      margin-top: calc(#{$headerFontSize} / 2);

      &__header {
        font-size: $headerFontSize;
      }

      &__subheader {
        font-size: 50px;
      }
    }

    &__logo {
      height: 85vh;
      width: 30vw;

      &::before {
        clip-path: circle(67.7% at 65% 20%);
      }
    }
  }
}
</style>
