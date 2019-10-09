<template>
  <footer class="footer">
    <div class="footer__logo"></div>
    <span class="footer__info"
      >©{{ data }} Piotr Żurek. All rights reserved</span
    >
  </footer>
</template>

<script>
export default {
  computed: {
    data() {
      return new Date().getFullYear();
    },
  },
};
</script>

<style lang="scss" scoped >
.footer {
  padding-top: 5vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: $solid-color;

  &__logo {
    background: url(../assets/logo.svg) center/contain no-repeat;
    width: 57px;
    height: 95px;
  }
  &__info {
    font-size: 14px;
    margin: 20px 0;
  }
}
</style>
