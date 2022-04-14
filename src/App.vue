<template>
  <div>
    <Header />
    <FilterSection />
    <CountryList />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import FilterSection from "./components/filter/FilterSection.vue"
import CountryList from "./components/countries/CountryList.vue";

export default {
  name: "App",
  components: {
    Header,
    FilterSection,
    CountryList,
  },
};
</script>

<style lang="scss">
@import url("https://fonts.google.com/specimen/Nunito+Sans");

* {
  box-sizing: border-box;
}

body {
  background-color: hsl(0, 0%, 98%);
  font-family: "Nunito Sans", sans-serif;
}

img {
  max-width: 100%;
}

h1 {
  margin: 0;
}

.container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1440px;
  padding: 30px;
}
</style>
