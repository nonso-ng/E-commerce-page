import { computed } from "vue";
import { useStore } from "vuex";

const useCounter = () =>{
    const store = useStore();
    const mycount = computed(()=> store.state.count)
    //const anotherCount = computed(()=>store.state.anotherCount)
    const loadedCount = computed(()=>store.state.loadedCount) 
    const increase = () => {
        store.commit("increaseCount");
    };

    const decrease = () =>{
        store.commit("decreaseCount");
    };
    const reset = () =>{
        store.commit("resetCount");
    }; 
    const setValue =()=>{
        store.commit("setCount");
    }
    return {increase,decrease,reset,setValue,mycount ,loadedCount}
};

export default useCounter;