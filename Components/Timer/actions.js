import { ADD_COUNTER, SUB_COUNTER } from "./types";

function addCounter() {
  return {
    type: ADD_COUNTER
  };
}

function subCounter() {
  return {
    type: SUB_COUNTER
  };
}

const actionCreators = {
  addCounter,
  subCounter
};

export { actionCreators };
