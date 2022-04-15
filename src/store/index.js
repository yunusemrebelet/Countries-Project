import { createStore } from 'vuex'
import axios from 'axios';

export default createStore({
  state: {
    isDarkMode: false,
    countryList: [],
    dropdownVisibility: false,
    filterText: "",
    selectedRegion: "",
    regionList: ["Africa", "America", "Europe", "Asia", "Oceania"]
  },
  getters: {
  },
  mutations: {
    changeTheme(state) {
      state.isDarkMode = !state.isDarkMode;
      console.log(state.isDarkMode);
    },
    getCountries(state) {
      axios.get('https://restcountries.com/v2/all')
        .then((response) => {
          state.countryList = response.data
          console.log(state.countryList)
          console.log(response.data)
        })
        .catch((error) => {
          console.error(error);
        })
    },
    dropdownToggle(state) {
      state.dropdownVisibility = !state.dropdownVisibility;
      console.log(state.dropdownVisibility);
    },
  },
  actions: {
  },
  modules: {
  }
})
