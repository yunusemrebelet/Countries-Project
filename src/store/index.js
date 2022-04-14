import { createStore } from 'vuex'

export default createStore({
  state: {
    isDarkMode: false
  },
  getters: {
  },
  mutations: {
    changeTheme(state) {
      state.isDarkMode = !state.isDarkMode;
      console.log(state.isDarkMode);
    }
  },
  actions: {
  },
  modules: {
  }
})
