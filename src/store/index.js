import { createStore } from 'vuex'

export default createStore({
  state: {
    count: 0
  },
  mutations: {
    increaseCount(state){
        state.count++
    },
    decreaseCount(state){
        state.count--
    },
    resetCount(state){
        state.count = 0
    }
  },
  actions: {
  },
  modules: {
  }
})
