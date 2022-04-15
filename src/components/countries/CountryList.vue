<template>
  <section>
    <div class="container country-list" id="countries">
      <SingleCountry />
    </div>
  </section>
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
section {
  display: flex;
  align-items: center;
  justify-content: center;
}
.country-list {
  justify-content: center;
}
</style>