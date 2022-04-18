<template>
  <div @click="this.$store.commit('dropdownToggle')" class="dropdown-region">
    Filter by region <i class="fas fa-chevron-down"></i>
    <ul v-if="dropdownVisibility">
      <li
        @click="setSelectedRegion(region)"
        v-for="region in this.$store.state.regionList"
        :key="region"
      >
        {{ region }}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["dropdownVisibility"]),
  },
  methods: {
    setSelectedRegion(selectedRegion) {
      this.$store.state.selectedRegion = selectedRegion;
      console.log(this.$store.state.selectedRegion);
    },
  },
};
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
      margin: 10px 0;
    }
  }
  i {
    margin-left: 8px;
  }
}
</style>