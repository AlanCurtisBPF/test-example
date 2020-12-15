import * as types from "./counterTypes";

// Actions
export const increment = (margin) => (dispatch, getState) => {
  const currentCount = getState().counter.count;
  const updateCount = currentCount * 1 + margin * 1;

  dispatch({
    type: types.INCREMENT_COUNTER,
    payload: { count: updateCount },
  });
};

export const decrement = (margin) => (dispatch, getState) => {
  const currentCount = getState().counter.count;
  const updateCount = currentCount * 1 - margin * 1;
  dispatch({
    type: types.DECREMENT_COUNTER,
    payload: { count: updateCount },
  });
};

export const reset = () => (dispatch) => {
  dispatch({ type: types.RESET_COUNTER });
};
