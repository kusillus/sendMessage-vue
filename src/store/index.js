import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations:{
    setCount(state, value) {
      state.count = value
    }
  },
  actions:{},
  getters:{
    getCount(state) {
      return state.count
    }
  }
})