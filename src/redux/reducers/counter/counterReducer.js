// import Actions Types
import * as types from "./counterTypes";

// Initial State
export const initialState = {
  count: 0,
};

// Reducer
const counterReducer = (state = initialState, action) => {
  let updateState;
  switch (action.type) {
    case types.INCREMENT_COUNTER:
      updateState= Object.assign({}, state, {...action.payload});
      return updateState
    case types.DECREMENT_COUNTER:
      updateState= Object.assign({}, state, {...action.payload});
      return updateState
    case types.RESET_COUNTER:
      updateState= Object.assign({}, state, initialState);
      return updateState
    default:
      return state;
  }
};

export default counterReducer;
