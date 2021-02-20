import { reactive } from "Vue";
import { IState } from "./type";

const State: IState = {
  code: "",
  token: "",
  user: {},
};

export const createState = () => {
  return State;
};
