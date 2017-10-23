import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    count: 0,
    emailsAlets: [
      { 'email': 'email_ejemplo@mail.com' },
      { 'email': 'email_de_prueba_2@mail.com' },
      { 'email': 'email@mail.com' }
    ]
  },
  mutations:{
    setCount(state, value) {
      state.count = value
    },
    addEmail(state, item){
      let listEmail = state.emailsAlets
      listEmail.push({'email': item})
    },
    deleteEmail(state, index) {
      let listEmail = state.emailsAlets
      listEmail.splice(index, 1)
    }
  },
  actions:{},
  getters:{
    getCount(state) {
      return state.count
    },
    getEmails(state) {
      return state.emailsAlets
    }
  }
})