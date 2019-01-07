import { ADD_COUNTER, SUB_COUNTER } from "./types";

initialState = {
  counter: 0
};

function addCounter() {
  return {
    ...state,
    counter: counter + 1
  };
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COUNTER:
      return {
        ...state,
        counter: state.counter + 1
      };
    case SUB_COUNTER:
      return {
        ...state,
        counter: state.counter - 1
      };
    default:
      return state;
  }
};

export default reducer;
