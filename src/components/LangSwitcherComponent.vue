<template>
  <div class="langSwitcherWrapper">
    <v-select
      v-model="$i18n.locale"
      :items="langs"
      class="langSwitcher"
      flat
      hide-details
      item-title="name"
      item-value="name"
      variant="solo"
    >
      <template v-slot:item="{ props, item }">
        <v-list-item class="countryFlag">
          <country-flag v-bind="props" :country="item.raw.flag" size="normal" />
        </v-list-item>
      </template>
      <template v-slot:selection="{ item }">
        <country-flag :country="item.raw.flag" size="normal" />
      </template>
    </v-select>
  </div>
</template>

<script lang="ts">
import CountryFlag from 'vue-country-flag-next'

export default {
  components: {
    CountryFlag
  },
  data() {
    return {
      langs: [
        { name: 'en', flag: 'us' },
        { name: 'pl', flag: 'pl' }
      ]
    }
  },
  methods: {
    saveLang() {
      this.$cookies.set('lang', this.$i18n.locale)
    }
  },
  watch: {
    '$i18n.locale': 'saveLang',
  },
  created() {
    if (this.$cookies.isKey('lang')) {
      this.$i18n.locale = this.$cookies.get('lang')
    }
  }

}
</script>

<style lang="scss" scoped>
.flag {
  box-shadow:
    0 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14),
    0px 1px 5px 0px rgba(0, 0, 0, 0.12);
}
.langSwitcherWrapper {
  width: fit-content;
}

.langSwitcher {
  &__item {
    color: black;
    text-transform: uppercase;
  }
  :deep(.v-field__append-inner) {
    display: none;
  }
  :deep(.v-field__input) {
    min-height: max-content;
    padding: 0;
  }
  :deep(.v-select__selection) {
    display: block;
  }
  :deep(.v-list-item) {
    overflow: hidden;
  }
}

.countryFlag {
  overflow: hidden;
}
</style>
