<template>
  <footer class="footer">
    <div class="footer__logo"></div>
    <span class="footer__info">©{{ date }} Piotr Żurek</span>
  </footer>
</template>

<script>

import {Component, Vue} from 'vue-property-decorator';

@Component
export default class Footer extends Vue {
  get date() {
      return new Date().getFullYear();
    }
}
</script>

<style lang="scss" scoped >
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
