<template>
  <div class="dropdown-region">
    Filter by region <i class="fas fa-chevron-down"></i>
    <ul>
      <li>Africa</li>
      <li>America</li>
      <li>Asia</li>
      <li>Europe</li>
      <li>Oceania</li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.dropdown-region {
  background-color: white;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06), 0 1px 2px rgba(0, 0, 0, 0.12);
  font-size: 14px;
  padding: 20px;
  border-radius: 4px;
  cursor: pointer;
  position: relative;
  ul {
    padding: 20px;
    position: absolute;
    width: 100%;
    border-radius: 4px;
    background-color: white;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06), 0 1px 2px rgba(0, 0, 0, 0.12);
    left: 0;
    top: 100%;
    list-style: none;
    li {
      margin: 5px 0;
    }
  }
  i {
    margin-left: 8px;
  }
}
</style>