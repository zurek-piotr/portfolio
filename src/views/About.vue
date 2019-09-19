<template>
  <div class="AboutWrapper">
    <div class="Me"></div>
    <div class="About">
      <h2 class="About__header">Cześć!</h2>
      <h2 class="About__subheader">Kim jestem?</h2>
      <p class="About__description">
        można by rzec pełnoprawny informatyk, gdyż sieć, administracja,
        bezpieczeństwo, helpdesk oraz programowanie nie jest mi obce.
        <br />
        <br />By nie zostać człowiekiem orkiestrą skupiam się na dziedzinie najbliżej mojemu sercu
      </p>
      <span class="About__programming">Programowaniu ❤</span>
    </div>
  </div>
</template>


<style lang="scss" scoped >
@import "../styles/globalVariables.scss";

.AboutWrapper {
  margin-top: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 100vh;
  max-height: 100vh;
}

.Me {
  position: relative;
  background: url(../assets/me.png) center/contain no-repeat;
  width: 30vw;
  height: 70vh;
  margin-left: 10vw;

  &::before {
    content: "";
    position: absolute;
    z-index: -1;
    background: $primary-color;
    top: 20vh;
    left: -1vw;
    height: 70vh;
    width: 30vw;
    border: 2px dotted black;
    border-radius: 50px;
    will-change: transform;
    transform: rotate(-20deg);
  }
}
.About {
  display: flex;
  flex-direction: column;
  width: 40vw;
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
  }
}
</style>
