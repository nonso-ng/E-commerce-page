import { createStore } from "vuex";

export default createStore({
  state: {
    count: 0,
    anotherCount: "",
    loadedCount: 0,
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
    },

    setCount(state,payload) {
      state.count = payload;
      // state.count = state.anotherCount;
      // state.anotherCount = "";
    },
  },

  actions: {
    Increment({ commit }) {
      commit("increaseCount");
    },

    Decrement({ commit }) {
      commit("decreaseCount");
      
    },
    ResetValue({ commit }) {
      commit("resetCount");
    },
    SetValue({commit}, payload) {
      commit("setCount",payload);
    
    },
  },

  // getters: {
  //   setValue(state, num) {
  //     return state.count = ;
  //   },
  // },
  modules: {},
});
