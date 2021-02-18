import { createStore } from "vuex";
import state from "./state";
import mutations from './mutations';
import actions from './actions';
import modules from "./modules";
import getters from './getter'

export default createStore({
  state,
  getters,
  mutations,
  actions,
  modules
});
