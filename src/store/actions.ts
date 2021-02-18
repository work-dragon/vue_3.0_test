import { ActionTree } from "vuex";

const Actions: ActionTree<any, any> = {
  addSync(context: any) {
    console.log("Alen ~ addSync ~ context", context);
    setTimeout(() => {
      context.commit("add", 100);
    }, 3000);
  },
};
export default Actions;
