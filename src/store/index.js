import { createStore } from "vuex";

export default createStore({
  state: {
    count: 0,
    anotherCount: "",
    loadedCount: 0,
    // show: false,
  },
  mutations: {
    increaseCount(state) {
      state.count++;
    },
    decreaseCount(state) {
      if (state.count > 0) {
        state.count--;
      }
    },
    resetCount(state) {
      state.loadedCount = state.count;
      state.count = 0;
      state.anotherCount = " ";
    },

   
    // handleShow(state){
    //     state.show = true;

    // }
  },
  actions: {
    asyncIncrement ({commit}) {
      setTimeout(() => {
        commit('increaseCount')
      })
    },

    asyncDecrement ({commit}) {
      setTimeout(() => {
        commit('decreaseCount')
      })
    },

    asyncResetState ({commit}) {
      setTimeout(() => {
        commit('resetCount')
      })
    },

    asyncSetValue ({commit}) {
      setTimeout(() => {
        commit('setValue')
      })
    }
  },
  getters: {
    setValue(state, num) {
      return state.count = num;
    },
  },
  modules: {},
});
