import { useStore } from "vuex";

const useCounter = () =>{
    const store = useStore();
    const increase = () => {
        store.commit("increaseCount");
    };

    const decrease = () =>{
        store.commit("decreaseCount");
    };
    const reset = () =>{
        store.commit("resetCount");
    }; 
    const setValue =(num)=>{
        store.commit("isetvalue",num);
    }
    return {increase,decrease,reset,setValue }
};

export default useCounter;