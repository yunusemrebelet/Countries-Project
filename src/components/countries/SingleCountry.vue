<template>
  <div
    v-for="country in filteredCountryList"
    :key="country"
    class="country-card"
  >
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
    filteredCountryList() {
      return this.filterByCountryName();
    },
  },
  methods: {
    filterByCountryName() {
      return this.$store.state.countryList.filter((country) =>
        country.name
          .toLowerCase()
          .includes(this.$store.state.filterText.toLowerCase())
      );
    },
  },
  mounted() {
    this.$store.commit("getCountries");
  },
};
</script>

<style lang="scss" scoped>
.country-card {
  height: 450px;
  width: 320px;
  background-color: white;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06), 0 1px 2px rgba(0, 0, 0, 0.12);
  border-radius: 4px;
  overflow: hidden;
  cursor: pointer;
  margin-left: 20px;
  margin-top: 20px;
  .country-body {
    padding: 30px;
    h2 {
      margin-top: 0;
    }
  }
  .country-header {
    height: 200px;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>