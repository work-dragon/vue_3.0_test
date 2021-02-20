import { readonly, watch, toRaw } from "vue";
import { createAction } from "./action";
import { createState } from "./state";
import { IState } from './type';

const state = createState();
const action = createAction(state);

// 持久化存储
export function createPersistStorage<T>(state: any, key = "default"): T {
  const STORAGE_KEY = "--APP-STORAGE--";

  // init value
  Object.entries(getItem(key)).forEach(([key, value]) => {
    state[key] = value;
  });

  function setItem(state: any) {
    const stateRow = getItem();
    stateRow[key] = state;
    const stateStr = JSON.stringify(stateRow);
    localStorage.setItem(STORAGE_KEY, stateStr);
  }

  function getItem(key?: string) {
    const stateStr = localStorage.getItem(STORAGE_KEY) || "{}";
    const stateRow = JSON.parse(stateStr) || {};
    return key ? stateRow[key] || {} : stateRow;
  }

  watch(state, () => {
    const stateRow = toRaw(state);
    setItem(stateRow);
  });

  return readonly(state);
}

export const userStore = () => {
  const store = {
    state: createPersistStorage<IState>(state),
    action: readonly(action),
  };
  return store;
};
