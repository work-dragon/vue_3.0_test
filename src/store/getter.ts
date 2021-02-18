import { GetterTree } from "vuex";

const getter: GetterTree<any, any> = {
  showNum: (state) => {
    console.log('getter ~ state', state)
    return `我就是当前最新的值：${state.count}`
  },
};

export default getter;
