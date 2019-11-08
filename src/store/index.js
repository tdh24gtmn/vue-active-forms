import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    index: 0,
    validateCounter: 0,
    ValidateArray: [
      {
        firstname: "",
        lastname: "",
        email: "",
        userId: "",
        select: null,
        selectState: null,
        selectCity: null,
        phone: "",
        code: ""
      },
      {
        firstname: "",
        lastname: "",
        email: "",
        userId: "",
        select: null,
        selectState: null,
        selectCity: null,
        phone: "",
        code: ""
      },
      {
        firstname: "",
        lastname: "",
        email: "",
        userId: "",
        select: null,
        selectState: null,
        selectCity: null,
        phone: "",
        code: ""
      },
      {
        firstname: "",
        lastname: "",
        email: "",
        userId: "",
        select: null,
        selectState: null,
        selectCity: null,
        phone: "",
        code: ""
      },
    ],
    greenCheckIcon: "mdi-check"
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
