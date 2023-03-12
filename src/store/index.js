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

    setValue(state) {
      state.count = state.anotherCount;
    },
    // handleShow(state){
    //     state.show = true;

    // }
  },
  actions: {},
  modules: {},
});
