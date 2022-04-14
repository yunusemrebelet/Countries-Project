<template>
  <header>
    <div class="container">
      <h1>Where in the world?</h1>
      <!-- TODO: Add reactive class to toggle dark and light mode fas fa-moon far fa-moon ve dark-mode,light-mode classes-->
      <button class="btn btn-toggle-mode">
        <i class="far fa-moon"></i> Dark Mode
      </button>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
header {
  background-color: hsl(0, 0%, 100%);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06), 0 1px 2px rgba(0, 0, 0, 0.12);
  .btn-toggle-mode {
    font-size: 16px;
    border: none;
    background-color: white;
    cursor: pointer;
  }
}
</style>