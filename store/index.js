import Vue from "vue";
import Vuex from "vuex";

import user from "./user";

Vue.use(Vuex);

const createStore = () => {
  return new Vuex.Store({
    state: {
      recentBrowsing: [],
      wechartImg: require("@/assets/img/wechart.jpg"),
      login: {
        visible: false
      },
      setPhone: {
        visible: false,
        userId: ""
      }
    },
    mutations: {
      changeLoginVisible(state, v) {
        state.login.visible = v;
      },
      changeSetPhoneVisible(state, v) {
        state.setPhone.visible = v;
      },
      changeSetPhoneUserId(state, v) {
        state.setPhone.userId = v;
      }
    },
    actions: {},
    modules: {
      user
    }
  });
} 
export default createStore;