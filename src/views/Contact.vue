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
        .then(this.successMessage())
        .catch(err => console.error(err));
    },
    successMessage() {
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

    &__message {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      align-content: center;
      text-align: center;

      &__header {
        width: 80%;
        font-weight: bold;
        font-size: 24px;
        padding-top: 50px;
      }
    }
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

.gform {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  &__email,
  &__message {
    width: 80%;
    background: #e5f6e7;
    border-bottom: 2px solid black;
    border-style: none none solid none;
    margin-top: 50px;
    padding: 15px;
    font-size: 18px;

    &::placeholder {
      font-size: 18px;
      text-align: left;
      padding: 15px;
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
    resize: none;
    height: 350px;
  }

  &__send {
    width: 120px;
    height: 40px;
    margin-top: 25px;
    border: 2px solid $solid-color;
    background-color: white;
    cursor: pointer;
    will-change: tansition;
    transition: background-color 0.5s ease-in-out, border-color 0.5s ease-in;
    font-weight: bold;

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
</style>
