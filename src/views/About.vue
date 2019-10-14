<template>
  <div class="aboutWrapper">
    <div class="me"></div>
    <div class="about">
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
  </div>
</template>


<style lang="scss" scoped >
.aboutWrapper {
  margin-top: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 100vh;
  max-height: 100vh;
}

.me {
  position: relative;
  background: url(../assets/aboutSrc/me.png) center/contain no-repeat;
  width: 480px;
  height: 600px;
  margin-left: 15vw;

  &::before {
    content: "";
    position: absolute;
    z-index: -1;
    background: $primary-color;
    bottom: 52px;
    left: -105px;
    height: 400px;
    width: 400px;
    border-radius: 50px;
    will-change: transform;
    transform: rotate(20deg) translatez(0);
  }
  &::after {
    position: absolute;
    content: "";
    background: url(../assets/patterns/dots.svg);
    width: 400px;
    height: 400px;
    bottom: 40px;
    left: -140px;
    z-index: -2;
    border-radius: 55px 0 40px 45px;
    transform: rotate(20deg) translatez(0);
  }
}
.about {
  display: flex;
  flex-direction: column;
  width: 45vw;
  margin-right: 50px;

  &__header {
    font-weight: bold;
    font-size: 48px;
  }
  &__subheader {
    margin-top: 25px;
    font-weight: bold;
    font-size: 36px;
  }
  &__description {
    margin-top: 50px;
    font-weight: 400;
    font-size: 36px;
  }
  &__programming {
    margin-top: 50px;
    font-weight: bold;
    font-size: 48px;
    align-self: center;

    &::after {
      content: " ❤";
      color: red;
    }
  }
}
</style>
