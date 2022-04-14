<template>
  <div class="container country-list" id="countries">
    <SingleCountry />
  </div>
</template>

<script>
import SingleCountry from "./SingleCountry";

export default {
  components: {
    SingleCountry,
  },
};
</script>

<style lang="scss" scoped>
.country-list {
  justify-content: center;
}
</style>