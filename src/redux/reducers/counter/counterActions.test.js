import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

import * as actions from "./counterActions";
import * as types from "./counterTypes";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("counterActions", () => {
  let store;
  beforeEach(() => {
    store = mockStore({ counter: { count: 0 } });
  });

  it("test run", () => {
    expect(true).toEqual(true);
  });

  // INCREMENT //
  it("increments 1", () => {
    const expectedActions = [
      {
        type: types.INCREMENT_COUNTER,
        payload: { count: 1 },
      },
    ];
    store.dispatch(actions.increment(1));
    expect(store.getActions()).toEqual(expectedActions);
  });

  it("increments by 4", () => {
    const expectedActions = [
      {
        type: types.INCREMENT_COUNTER,
        payload: { count: 4 },
      },
    ];
    store.dispatch(actions.increment(4));
    expect(store.getActions()).toEqual(expectedActions);
  });

  it("increments by null", () => {
    const expectedActions = [
      {
        type: types.INCREMENT_COUNTER,
        payload: { count: 0 },
      },
    ];
    store.dispatch(actions.increment(null));
    expect(store.getActions()).toEqual(expectedActions);
  });

  // DECREMENT //
  it("decrements 1", () => {
    const expectedActions = [
      {
        type: types.DECREMENT_COUNTER,
        payload: { count: -1 },
      },
    ];
    store.dispatch(actions.decrement(1));
    expect(store.getActions()).toEqual(expectedActions);
  });

  it("decrements by 4", () => {
    const expectedActions = [
      {
        type: types.DECREMENT_COUNTER,
        payload: { count: -4 },
      },
    ];
    store.dispatch(actions.decrement(4));
    expect(store.getActions()).toEqual(expectedActions);
  });

  it("decrements by null", () => {
    const expectedActions = [
      {
        type: types.DECREMENT_COUNTER,
        payload: { count: 0 },
      },
    ];
    store.dispatch(actions.decrement(null));
    expect(store.getActions()).toEqual(expectedActions);
  });

  // RESET //
  it("reset", () => {
    const expectedActions = [
      {
        type: types.RESET_COUNTER,
      },
    ];
    store.dispatch(actions.reset());
    expect(store.getActions()).toEqual(expectedActions);
  });
});
