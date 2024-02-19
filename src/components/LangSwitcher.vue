<template>
  <div class="langSwitcherWrapper">
    <v-select
      v-model="$i18n.locale"
      :items="langs"
      autowidth
      class="langSwitcher"
      flat
      hide-details
      item-text="name"
      item-value="name"
      solo
      @change="SaveLang()"
    >
      <template slot="item" slot-scope="data">
        <country-flag :country="data.item.flag" size="normal" />
      </template>
      <template slot="selection" slot-scope="data">
        <country-flag :country="data.item.flag" size="normal" />
      </template>
      <template slot="label" slot-scope="data">
        <country-flag :country="data.item.flag" size="normal" />
      </template>
    </v-select>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import CountryFlag from 'vue-country-flag';

@Component({
  components: {
    CountryFlag
  },
})
export default class LangSwitcher extends Vue {
  public langs = [
        { name: 'en', flag: 'us' },
        { name: 'pl', flag: 'pl' },
      ];

  SaveLang() {
      this.$cookies.set('lang', this.$i18n.locale);
    }

  created() {
    if (this.$cookies.isKey('lang')) {
      this.$i18n.locale = this.$cookies.get('lang');
    }
  }
}
</script>

<style lang="scss" scoped>
.flag {
  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
}
.langSwitcherWrapper{
  display: flex;
  justify-content: center;
}

.langSwitcher {
  max-width: min-content;
  &__item {
    color: black;
    text-transform: uppercase;
  }
}
</style>
