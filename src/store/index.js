import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let defaultCity = '昆山'

try {
  if (localStorage.city) {
    defaultCity = localStorage.city
  }
} catch (error) {}

export default new Vuex.Store({
  state: {
    currentCity: defaultCity
  },
  mutations: {
    changeCurrentCityM (state, city) {
      state.currentCity = city
      try {
        localStorage.city = city
      } catch (error) {}
    }
  },
  actions: {
    changeCurrentCity (context, city) {
      context.commit('changeCurrentCityM', city)
    }
  },
  modules: {
  }
})
