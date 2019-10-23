<template>
  <div class="contactWrapper">
    <div class="contact">
      <div class="contact__info">
        <template v-if="isPolishLanguage()">
          <h2 class="contact__info__header">Kontakt</h2>
          <div class="contact__info__description">
            Jeżeli jesteś zainteresowany współpracą ze mną, zapraszam do
            kontaktu.
          </div>
        </template>
        <template v-else>
          <h2 class="contact__info__header">Contact</h2>
          <div class="contact__info__description">
            Have a cool project in mind, and think I can help you with it? Feel
            free to contact me.
          </div>
        </template>
        <div class="contact__info__links">
          <a class="contact__info__links__link" href="tel:+48502344491"
            ><div class="button phone"></div>
            502344491</a
          >
          <a
            class="contact__info__links__link contact__info__links__link--email"
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
          <template v-if="isPolishLanguage()">
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
          </template>

          <template v-else>
            <input
              id="email"
              class="gform__email"
              name="email"
              type="email"
              v-model="email"
              placeholder="Email address"
              required
            />
            <textarea
              id="message"
              class="gform__message"
              name="message"
              v-model="message"
              placeholder="How can I help you?"
              required
            ></textarea>
            <button class="gform__send" type="submit">Send</button>
          </template>
        </form>
        <div
          class="contact__form__message"
          v-show="visibleMessage"
          v-if="isPolishLanguage()"
        >
          <h2 class="contact__form__message__header">Dziękuje za kontakt 😊</h2>
          <br />
          <button
            class="gform__send gform__send--message"
            @click="switchVisibility()"
          >
            Wyślij kolejną wiadomość
          </button>
        </div>
        <div class="contact__form__message" v-show="visibleMessage" v-else>
          <h2 class="contact__form__message__header">
            Thank you for contact 😊
          </h2>
          <br />
          <button
            class="gform__send gform__send--message"
            @click="switchVisibility()"
          >
            Send another message
          </button>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import isPolishLanguage from '../scripts/Helpers';
import Footer from './Footer.vue';

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
    isPolishLanguage,
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
  components: {
    Footer,
  },
};

</script>

<style lang="scss" scoped >
.contactWrapper {
  background: $solid-color;
}

.contact {
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  min-height: 100vh;
  width: 100%;
  padding-top: 10vh;

  &__info {
    width: 80vw;
    padding: 80px 70px;

    &__header {
      font-size: 60px;
      font-weight: bold;
      text-align: center;
    }

    &__description {
      margin-top: 80px;
      font-size: 28px;
      font-weight: 400;
    }

    &__links {
      margin-top: 80px;
      width: auto;

      &__link {
        display: inline-flex;
        flex-direction: row;
        align-items: center;
        margin-top: 30px;
        margin-right: 100%;
        font-size: 24px;
        font-weight: 400;
        text-decoration: none;

        &--email {
          font-size: 16px;
        }

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
  height: 30px;
  width: 30px;
  margin-right: 25px;
  cursor: pointer;

  &::after {
    position: absolute;
    top: 50%;
    left: 75px;
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
      font-size: 24px;
      left: calc(100% + 25px);
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
    background: $formBackground-color;
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
@media screen and (min-width: 375px) {
  .contact__info__links__link--email {
    font-size: 18px;
  }
}

@media screen and (min-width: 425px) {
  .contact__info__links__link--email {
    font-size: 22px;
  }
}

@media screen and (min-width: 425px) {
  .contact__info__links__link--email {
    font-size: 24px;
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
      width: 50vw;
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
      }
    }
  }
}

@media screen and (min-width: 2560px) {
  .contact {
    &__info {
      width: 45vw;

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
