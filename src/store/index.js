import { createStore } from 'vuex'
import axios from 'axios';

export default createStore({
  state: {
    isDarkMode: false,
    countryList: null
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
        })
        .catch((error) => {
          console.error(error);
        })
    }
  },
  actions: {
  },
  modules: {
  }
})
