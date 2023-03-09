import { reactive } from "vue";


const state = reactive(
    {
        counter: 0
    }
    
) 


const methods = {
    increaseCount(){
        state.counter++
    },

    decreaseCount(){
        state.counter--
    }
}

export default{
    state,methods
}