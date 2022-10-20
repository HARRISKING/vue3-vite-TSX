import { defineComponent, ref } from "vue";

export const App2 = defineComponent({
  setup() {
    const count = ref(0);
    const OnAdd = () => {
      count.value += 1;
    };
    return () => (
      <>
        <div>{count.value}</div>
        <button onClick={OnAdd}>+1</button>
      </>
    );
  },
});
