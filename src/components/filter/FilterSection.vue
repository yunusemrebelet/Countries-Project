<template>
  <section>
    <div class="filter-container">
      <SearchInput />
      <DropdownRegion />
    </div>
  </section>
</template>

<script>
import SearchInput from "./SearchInput.vue";
import DropdownRegion from "./DropdownRegion.vue";
export default {
  components: {
    SearchInput,
    DropdownRegion,
  },
};
</script>

<style lang="scss" scoped>
section {
  display: flex;
  align-items: center;
  justify-content: center;
}
.filter-container {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  padding: 30px;
  max-width: 1440px;
}
</style>