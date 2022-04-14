<template>
  <div v-for="country in countryList" :key="country" class="country-card">
    <div class="country-header">
      <img :src="country.flags.svg" :alt="country.name" />
    </div>
    <div class="country-body">
      <h2>{{ country.name }}</h2>
      <p><strong>Population: </strong>{{ country.population }}</p>
      <p><strong>Region: </strong>{{ country.region }}</p>
      <p><strong>Capital: </strong>{{ country.capital }}</p>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["countryList"]),
  },
  mounted() {
    this.$store.commit("getCountries");
    console.log();
  },
};
</script>

<style lang="scss" scoped>
.country-card {
  width: 300px;
  background-color: white;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06), 0 1px 2px rgba(0, 0, 0, 0.12);
  border-radius: 4px;
  overflow: hidden;
  cursor: pointer;
  margin: 40px;
  .country-body {
    padding: 30px;
    h2 {
      margin-top: 0;
    }
  }
}
</style>