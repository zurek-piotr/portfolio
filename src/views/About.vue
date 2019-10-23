<template>
  <div class="aboutWrapper">
    <div class="me"></div>
    <div class="about" v-if="isPolishLanguage()">
      <h2 class="about__header">Cześć!</h2>
      <h2 class="about__subheader">Kim jestem?</h2>
      <p class="about__description">
        można by rzec pełnoprawny informatyk, gdyż sieć, administracja,
        bezpieczeństwo, helpdesk oraz programowanie nie jest mi obce.
        <br />
        <br />By nie zostać człowiekiem orkiestrą skupiam się na dziedzinie
        najbliższej mojemu sercu
      </p>
      <span class="about__programming">Programowaniu</span>
    </div>

    <div class="about" v-else>
      <h2 class="about__header">Hi!</h2>
      <h2 class="about__subheader">Who am I?</h2>
      <p class="about__description">
        I can say that I'm pure IT specialist, because I'm not afraid of
        networking, administration, servers security, helpdesk and programming.
        <br />
        <br />In order not to become a human orchestra, I focus on the area
        closest to my heart
      </p>
      <span class="about__programming">Programming</span>
    </div>
  </div>
</template>

<script>
import isPolishLanguage from '../scripts/Helpers';

export default {

  methods: {
    isPolishLanguage,
  },
};
</script>

<style lang="scss" scoped >
.aboutWrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  max-width: 100vw;
  margin-top: 10vh;
}

.about {
  display: flex;
  flex-direction: column;
  width: 90vw;
  margin: 0 50px;
  order: 1;

  &__header {
    font-size: 50px;
    font-weight: bold;
  }
  &__subheader {
    margin-top: 25px;
    font-size: 36px;
    font-weight: bold;
  }
  &__description {
    margin-top: 50px;
    font-size: 28px;
    font-weight: 400;
  }
  &__programming {
    margin-top: 50px;
    font-size: 28px;
    font-weight: bold;
    align-self: center;

    &::after {
      content: " ❤";
      color: red;
    }
  }
}
.me {
  position: relative;
  height: 330px;
  width: 192px;
  margin: 50px 0;
  background: url(../assets/aboutSrc/me_mobile330x192.png) center/contain
    no-repeat;
  order: 2;

  &::before {
    content: "";
    position: absolute;
    background: $primary-color;
    height: 230px;
    width: 230px;
    bottom: 9%;
    left: -14%;
    border-radius: 30px;
    will-change: transform;
    transform: rotate(22deg) translatez(0);
    z-index: -1;
  }
  &::after {
    position: absolute;
    content: "";
    background: url(../assets/patterns/dots.svg);
    height: 240px;
    width: 240px;
    bottom: 4%;
    left: -25%;
    border-radius: 20px 0 10px 5px;
    transform: rotate(22deg) translatez(0);
    z-index: -2;
  }
}
@media screen and (min-width: 768px) {
  .about {
    &__programming {
      font-size: 36px;
    }
  }
  .me {
    height: 430px;
    width: 250px;
    background: url(../assets/aboutSrc/me_mobile430x250.png) center/contain
      no-repeat;

    &::before {
      height: 330px;
      width: 330px;
      bottom: 10%;
      left: -25%;
    }
    &::after {
      height: 340px;
      width: 340px;
      bottom: 7%;
      left: -34%;
    }
  }
}
@media screen and (min-width: 1024px) {
  .aboutWrapper {
    flex-direction: row;
  }

  .me {
    height: 600px;
    width: 481px;
    background: url(../assets/aboutSrc/me600x481.png) center/contain no-repeat;
    margin-left: 20vw;
    order: 1;

    &::before {
      height: 360px;
      width: 360px;
      bottom: 17%;
      left: -29%;
      border-radius: 50px;
      transform: rotate(20deg) translatez(0);
    }
    &::after {
      height: 360px;
      width: 360px;
      bottom: 15%;
      left: -35%;
      border-radius: 55px 0 35px 45px;
      transform: rotate(20deg) translatez(0);
    }
  }
  .about {
    width: 45vw;
    margin-right: 20px;
    order: 2;

    &__header {
      font-size: 46px;
    }
    &__subheader {
      font-size: 34px;
    }
    &__description {
      font-size: 28px;
    }
    &__programming {
      font-size: 36px;
    }
  }
}
@media screen and (min-width: 1440px) {
  .me {
    &::before {
      height: 400px;
      width: 400px;
      bottom: 10%;
      left: -24%;
    }
    &::after {
      height: 400px;
      width: 400px;
      bottom: 8%;
      left: -29%;
    }
  }
}
@media screen and (min-width: 2560px) {
  .me {
    height: 800px;
    width: 642px;
    background: url(../assets/aboutSrc/me800x642.png) center/contain no-repeat;

    &::before {
      height: 600px;
      width: 600px;
      bottom: 10%;
      left: -32%;
    }
    &::after {
      width: 600px;
      height: 600px;
      bottom: 8%;
      left: -38%;
    }
  }
  .about {
    width: 50vw;
    margin-right: 50px;

    &__header {
      font-size: 80px;
    }
    &__subheader {
      font-size: 48px;
    }
    &__description {
      font-size: 38px;
    }
    &__programming {
      font-size: 70px;
    }
  }
}
</style>
