<template>
  <div>
    <input
      v-model="this.$store.state.filterText"
      type="text"
      placeholder="Search for a country..."
    />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
input {
  padding: 20px;
  border-radius: 4px;
  border: none;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06), 0 1px 2px rgba(0, 0, 0, 0.12);
  min-width: 300px;
  font-size: 14px;
}
</style>