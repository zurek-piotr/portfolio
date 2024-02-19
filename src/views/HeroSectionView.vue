<template>
  <section class="heroSection">
    <button
      class="heroSection__hamburgerMenu__button"
      @click="isOpen = !isOpen"
      v-show="screenWidth < 1024"
    >
      <div :class="['heroSection__hamburgerMenu__inner', { open: isOpen }]"></div>
    </button>

    <Navigation v-if="screenWidth >= 1024" />
    <transition name="slide" v-else>
      <div class="heroSection__hamburgerMenu" v-show="isOpen">
        <Navigation @changeIsOpen="toggleIsOpen" />
      </div>
    </transition>

    <div class="heroSection__textWrapper">
      <h1 class="heroSection__textWrapper__header">
        Piotr
        <br />Żurek
      </h1>
      <p class="heroSection__textWrapper__subheader">{{ subheader }}</p>
    </div>

    <div class="heroSection__logo"></div>
  </section>
</template>

<script lang="ts">
import Navigation from '../components/NavigationComponent.vue'

export default {
  components: {
    Navigation
  },
  data() {
    return {
      subheader: '<FullStackDeveloper />',
      screenWidth: window.innerWidth,
      isOpen: false
    }
  },
  methods: {
    setScreenWidth() {
      this.screenWidth = window.innerWidth
    },
    toggleIsOpen(data: boolean) {
      this.isOpen = data
    }
  },
  watch: {
    isOpen(newValue: boolean) {
      if (newValue) {
        document.querySelector('body')!.style.position = 'fixed'
      } else {
        document.querySelector('body')!.style.position = ''
      }
    }
  },
  mounted() {
    window.addEventListener('resize', this.setScreenWidth)
  }
}
</script>

<style lang="scss" scoped>
@import '../scss/_variables.scss';

$headerFontSize: 72px;
.heroSection {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  max-width: 100vw;
  background: $primary-color;

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

  &__logo {
    background: url(../assets/projectsSrc/logo.svg) center/contain no-repeat;
    height: 45vh;
    width: 55vw;
    order: 1;
  }

  &__hamburgerMenu {
    display: block;
    position: fixed;
    background: white;
    height: 100vh;
    width: 100vw;
    z-index: 99998;

    &__button {
      position: absolute;
      top: 40px;
      right: 40px;
      padding: 15px;
      border: none;
      background: none;
      cursor: pointer;
      z-index: 99999;
    }

    &__inner {
      position: relative;
      will-change: transform;
      transition: transform 0.5s;

      overflow: visible;

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
        content: '';
        top: -7px;
        left: 0;
        transition: transform 0.5s;
      }

      &::after {
        position: absolute;
        content: '';
        top: 7px;
        left: 0;
        transition: transform 0.3s;
      }

      &.open {
        will-change: transform;
        transform: rotate(45deg);

        &::before {
          will-change: transform;
          transform: translateY(7px) rotate(90deg);
        }

        &::after {
          will-change: transform, opacity;
          transform: translateY(-7px);
        }
      }
    }
  }
}

.slide-enter-active {
  animation: slide-in 0.4s;
}

.slide-leave-active {
  animation: slide-in 0.3s reverse;
}

@keyframes slide-in {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
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
        content: '';
        position: absolute;
        background: $primary-color;
        top: 0;
        right: 0;
        height: 100vh;
        width: 100vw;
        clip-path: circle(75vh at 75vw 22vh);
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
        clip-path: circle(81vh at 71vw 18vh);
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
        clip-path: circle(81vh at 71vw 18vh);
      }
    }
  }
}
</style>
