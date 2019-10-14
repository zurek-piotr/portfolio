<template>
  <div class="contact">
    <div class="contact__info">
      <h2 class="contact__info__header">Kontakt</h2>
      <div class="contact__info__description">
        Jeżeli jesteś zainteresowany współpracą ze mną, zapraszam do kontaktu.
      </div>
      <div class="contact__info__links">
        <a class="contact__info__links__link" href="tel:+48502344491"
          ><div class="button phone"></div>
          502344491</a
        >
        <a
          class="contact__info__links__link"
          href="mailto:piotrzurek97@gmail.com"
          ><div class="button email"></div>
          piotrzurek97@gmail.com</a
        >
        <a class="contact__info__links__link" target="_blank" href="#"
          ><div class="button linkedin"></div
        ></a>
      </div>
    </div>
    <div class="contact__form">
      <form class="gform"></form>
    </div>
  </div>
</template>


<style lang="scss" scoped >
.contact {
  display: flex;
  justify-content: space-between;
  margin-top: 10vh;
  min-height: 100vh;
  background: $solid-color;

  &__form {
    width: 500px;
    height: 650px;
    background: #fff;
    align-self: center;
    margin: 50px 100px 0 0;
  }

  &__info {
    padding: 80px 70px;
    width: 550px;

    &__header {
      font-size: 48px;
      font-weight: bold;
    }
    &__description {
      margin-top: 80px;
      font-size: 36px;
      font-weight: 400;
    }
    &__links {
      margin-top: 100px;
      display: inline-block;

      &__link {
        margin-top: 30px;
        font-size: 36px;
        font-weight: 400;
        text-decoration: none;
        display: inline-flex;
        flex-direction: row;
        align-items: center;

        &[href] {
          color: #000;
        }
      }
    }
  }
}

.button {
  position: relative;
  background: center/contain no-repeat;
  width: 50px;
  height: 50px;
  margin-right: 25px;
  cursor: pointer;

  &::after {
    position: absolute;
    font-size: 36px;
    left: 75px;
    top: 50%;
    transform: translateY(-50%);
  }

  &.phone {
    background-image: url(../assets/contactSrc/phoneIcon.svg);
  }
  &.email {
    background-image: url(../assets/contactSrc/emailIcon.svg);
  }
  &.linkedin {
    background-image: url(../assets/contactSrc/linkedinIcon.svg);
    &::after {
      content: "LinkedIn";
    }
  }
}
</style>
