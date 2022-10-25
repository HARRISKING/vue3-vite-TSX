import { defineComponent } from "vue";

export const Home = defineComponent({
  setup(props, ctx) {
    return () => <div>执行成功</div>;
  },
});
