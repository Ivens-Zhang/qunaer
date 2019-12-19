import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentCity: '昆山'
  },
  mutations: {
    changeCurrentCityM (state, city) {
      console.log(city)
      this.state.currentCity = city
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
