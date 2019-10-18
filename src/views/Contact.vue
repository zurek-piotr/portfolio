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
      <form
        class="gform"
        @submit.prevent="onSubmit"
        method="POST"
        v-show="visibleForm"
      >
        <input
          id="email"
          class="gform__email"
          name="email"
          type="email"
          v-model="email"
          placeholder="Adres email"
          required
        />
        <textarea
          id="message"
          class="gform__message"
          name="message"
          v-model="message"
          placeholder="Jak mogę Ci pomóc?"
          required
        ></textarea>
        <button class="gform__send" type="submit">Wyślij</button>
      </form>
      <div class="contact__form__message" v-show="visibleMessage">
        <h2 class="contact__form__message__header">Dziękuje za kontakt 😊</h2>
        <br />
        <button
          class="gform__send gform__send--message"
          @click="switchVisibility()"
        >
          Wyślij kolejną wiadomość
        </button>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      visibleForm: true,
      visibleMessage: false,
      message: '',
      email: '',
      API: 'https://script.google.com/macros/s/AKfycbxMoGepI836k8LmXrrmiqRjsQQNxrdQDHA63Ni1uA/exec',
    };
  },
  methods: {
    onSubmit() {
      const formData = new FormData();
      formData.set('email', this.email);
      formData.set('message', this.message);

      const config = { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } };

      this.axios.post(this.API, formData, config)
        .then(this.showSuccessMessage())
        .catch(err => console.error(err));
    },
    showSuccessMessage() {
      this.message = '';
      this.email = '';
      this.switchVisibility();
    },
    switchVisibility() {
      this.visibleForm = !this.visibleForm;
      this.visibleMessage = !this.visibleMessage;
    },
  },
};

</script>

<style lang="scss" scoped >
.contact {
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  min-height: 100vh;
  width: 100%;
  padding-top: 10vh;
  background: $solid-color;

  &__info {
    width: 80vw;
    padding: 80px 70px;

    &__header {
      font-size: 72px;
      font-weight: bold;
      text-align: center;
    }

    &__description {
      margin-top: 80px;
      font-size: 36px;
      font-weight: 400;
    }

    &__links {
      margin-top: 80px;

      &__link {
        display: flex;
        flex-direction: row;
        margin-top: 30px;
        font-size: 36px;
        font-weight: 400;
        text-decoration: none;

        &[href] {
          color: #000;
        }
      }
    }
  }

  &__form {
    width: 80vw;
    margin-bottom: 50px;
    background: #fff;
    align-self: center;

    &__message {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      align-content: center;
      text-align: center;

      &__header {
        width: 80%;
        padding-top: 50px;
        font-weight: bold;
        font-size: 24px;
      }
    }
  }
}

.button {
  position: relative;
  background: center/contain no-repeat;
  height: 50px;
  width: 50px;
  margin-right: 25px;
  cursor: pointer;

  &::after {
    position: absolute;
    top: 50%;
    left: 75px;
    font-size: 36px;
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

.gform {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  &__email,
  &__message {
    width: 80%;
    padding: 15px;
    margin-top: 50px;
    background: #e5f6e7;
    border-bottom: 2px solid black;
    border-style: none none solid none;
    font-size: 18px;

    &::placeholder {
      padding: 15px;
      font-size: 18px;
      text-align: left;
    }

    &:focus::placeholder {
      opacity: 0;
      transition: opacity 0.5s ease-out;
    }

    &:focus {
      border-color: $solid-color;
      transition: border-color 0.5s ease-out;
    }
  }

  &__email {
    height: 35px;
  }
  &__message {
    height: 350px;
    resize: none;
  }

  &__send {
    height: 40px;
    width: 120px;
    margin: 25px 0;
    border: 2px solid $solid-color;
    background-color: white;
    will-change: tansition;
    transition: background-color 0.5s ease-in-out, border-color 0.5s ease-in;
    font-weight: bold;
    cursor: pointer;

    &:hover,
    &:focus {
      background-color: $solid-color;
      border-color: #000;
    }
  }

  &__send--message {
    margin-top: 80px;
    width: 80%;
    height: 80px;
  }
}
@media screen and (min-width: 1024px) {
  .contact {
    display: flex;
    justify-content: space-between;
    flex-direction: row;

    &__info {
      width: 40vw;
      padding: 0 50px;

      &__header {
        font-size: 48px;
        text-align: left;
      }
      &__description {
        font-size: 24px;
      }
      &__links {
        &__link {
          font-size: 24px;
        }
      }
    }

    &__form {
      width: 60vw;
      margin-right: 50px;
    }
  }

  .button {
    height: 30px;
    width: 30px;

    &.linkedin {
      &::after {
        font-size: 24px;
        left: calc(100% + 25px);
      }
    }
  }

  .gform {
    &__message {
      height: 50vh;
    }
  }
}

@media screen and (min-width: 1440px) {
  .contact {
    &__info {
      width: 55vw;
      padding: 0 30px 0 100px;

      &__links {
        &__link {
          font-size: 28px;
        }
      }
    }

    &__form {
      width: 45vw;
      margin-right: 100px;
    }
  }

  .button {
    height: 40px;
    width: 40px;

    &.linkedin {
      &::after {
        font-size: 28px;
        left: calc(100% + 25px);
      }
    }
  }
}

@media screen and (min-width: 2560px) {
  .contact {
    &__info {
      width: 50vw;

      &__header {
        font-size: 80px;
      }

      &__description {
        font-size: 48px;
      }

      &__links {
        &__link {
          font-size: 52px;
        }
      }
    }

    &__form {
      height: 80vh;
      width: 40vw;
      margin-right: 5vw;
    }
  }

  .button {
    height: 70px;
    width: 70px;
    margin-right: 50px;

    &.linkedin {
      &::after {
        font-size: 52px;
        left: calc(100% + 50px);
      }
    }
  }
}
</style>
