import { IState } from "./type";

function updateToken(state: IState) {
  return (token: string) => {
    state.token = token;
  };
}

function updateUser(state: IState) {
  return (user: any) => {
    state.user = user;
  };
}

function updateCode(state: IState) {
  return (code: string) => {
    state.code = code;
  };
}

/**
 * 创建Action
 * @param state
 */
export const createAction = (state: IState) => {
  return {
    updateToken: updateToken(state),
    updateUser: updateUser(state),
    updateCode: updateCode(state),
  };
};
