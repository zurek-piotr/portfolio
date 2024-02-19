module.exports = {
  "css": {
    "loaderOptions": {
      "scss": {
        "prependData": `
        @import "~@/scss/_variables.scss";
        `
      }
    }
  },
  "pluginOptions": {
    "i18n": {
      "locale": "en",
      "fallbackLocale": "en",
      "localeDir": "locales",
      "enableInSFC": true
    }
  },
  "transpileDependencies": [
    "vuetify"
  ]
}