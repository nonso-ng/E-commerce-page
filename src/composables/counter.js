import { computed } from "vue";
import { useStore } from "vuex";

const useCounter = () => {
  const store = useStore();
  const mycount = computed(() => store.state.count);
  //const anotherCount = computed(() => store.state.anotherCount);
  const loadedCount = computed(() => store.state.loadedCount);
  
  const increase = () => {
    store.dispatch("Increment");
  };

  const decrease = () => {
    store.dispatch("Decrement");
  };
  const reset = () => {
    store.dispatch("ResetValue");
  };
  const setValue = (newValue) => {
    store.dispatch("SetValue",newValue);
  };
  return { increase, decrease, reset, setValue, mycount, loadedCount };
};

export default useCounter;


 