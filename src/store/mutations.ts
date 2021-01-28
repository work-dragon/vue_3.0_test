interface MutationsState {
  count: number;
}

const Mutations = {
  /**
   * @param state 获取全局共享数据state
   * @param step 一次增加多少
   */
  add(state: MutationsState, step: number) {
    state.count += step;
  },
  sub(state: MutationsState, step: number) {
    state.count -= step;
    if (state.count <= 0) {
      state.count = 0;
      alert("不能再减少啦~~！");
      return;
    }
  },
};
export default Mutations;
