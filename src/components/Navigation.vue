<template>
  <div class="Navigation">
    <a href="#" class="Navigation__link">O mnie</a>
    <a href="#" class="Navigation__link">Projektu</a>
    <a href="#" class="Navigation__link">Kontakt</a>
  </div>
</template>

<style lang="scss" scoped >
.Navigation {
  position: absolute;
  top: 60px;
  left: 10vw;
  display: flex;
  justify-content: space-between;
  &__link {
    margin-right: 20px;
    font-size: 12px;
    font-weight: 400;
    text-decoration: none;
    color: black;
  }
}
</style>
