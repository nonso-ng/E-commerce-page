import { createStore } from "vuex";

export default createStore({
  state: {
    count: 0,
    loadedCount: 0,
    price: 125,

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
    },
    finalCost(state){
      state.loadedCount * state.price
    }

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
    FinalCost({commit}){
      commit("finalCost");
    }
  },

  // getters: {
  //   setValue(state, num) {
  //     return state.count = ;
  //   },
  // },
  modules: {},
});
