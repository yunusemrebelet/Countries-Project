<template>
  <div>
    <Header />
    <FilterSection />
    <CountryList />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import FilterSection from "./components/filter/FilterSection.vue";
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
  margin: 0;
  color:  hsl(200, 15%, 8%);
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
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  padding: 30px;
  max-width: 1440px;
}
</style>
