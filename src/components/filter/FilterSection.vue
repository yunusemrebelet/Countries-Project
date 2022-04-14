<template>
  <section>
    <div class="container">
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
</style>