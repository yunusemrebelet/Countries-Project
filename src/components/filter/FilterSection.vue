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
section {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px;
}

</style>