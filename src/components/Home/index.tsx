import { defineComponent, onMounted } from "vue";
import styles from "./index.module.less";
export const Home = defineComponent({
  setup(props, ctx) {
    onMounted(() => {
      console.log("styles>>>", styles);
    });
    return () => <div class={styles.homeBox}>执行成功</div>;
  },
});
