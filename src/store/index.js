import { createStore } from 'vuex'

export default createStore({
  state: {
    count: 0,
    anotherCount:"",
    // show: false,
  },
  mutations: {
    increaseCount(state){
        state.count++
    },
    decreaseCount(state){
        if(state.count > 0){
            state.count--
        }
        
    },
    resetCount(state){
        state.count = 0;
        state.anotherCount = " "
    },

    setValue(state){
        state.count = state.anotherCount
    },
// handleShow(state){
//     state.show = true;

// }

  },
  actions: {
  },
  modules: {
  }
})
