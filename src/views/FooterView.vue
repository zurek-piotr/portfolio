<template>
  <footer class="footer">
    <div class="footer__logo"></div>
    <span class="footer__info">©{{ date }} Piotr Żurek</span>
  </footer>
</template>

<script lang="ts">
export default {
  data() {
    return {
      date: new Date().getFullYear()
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../scss/_variables.scss';

.footer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 5vh;
  background: $solid-color;

  &__logo {
    height: 95px;
    width: 57px;
    background: url(../assets/projectsSrc/logo.svg) center/contain no-repeat;
  }
  &__info {
    font-size: 14px;
    margin: 20px 0;
  }
}
@media screen and (min-width: 2560px) {
  .footer {
    &__info {
      font-size: 24px;
    }
  }
}
</style>
