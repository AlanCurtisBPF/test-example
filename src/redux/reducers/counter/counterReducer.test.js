import configureStore from "../../configureStore";
import * as actions from "./counterActions";
import counterReducer, { initialState } from "./counterReducer";

describe("counterReducer", () => {
  let store;
  beforeEach(() => {
    store = configureStore();
  });

  it("test run", () => {
    expect(true).toEqual(true);
  });

  it("should return inital state: version 01", () => {
    expect(counterReducer(undefined, {})).toEqual(initialState);
  });

  it("should return inital state: version 02", () => {
    const state = counterReducer(undefined, { type: "@@INIT" });
    expect(state).toEqual(initialState);
  });

  // INCREMENT //
  it("should handle INCREMENT by 1", () => {
    const actionsList = [actions.increment(1)];

    actionsList.forEach((action) => store.dispatch(action));

    const actual = store.getState().counter;
    const expected = { count: 1 };
    expect(actual).toEqual(expected);

  });
  it("should handle INCREMENT by 1 three times", () => {
    const actionsList = [
        actions.increment(1),
        actions.increment(1),
        actions.increment(1),
    ];

    actionsList.forEach((action) => store.dispatch(action));

    const actual = store.getState().counter;
    const expected = { count: 3 };
    expect(actual).toEqual(expected);
  });

  it("should handle INCREMENT by different margins", () => {
    const actionsList = [
        actions.increment(3),
        actions.increment(2),
        actions.increment(5),
    ];

    actionsList.forEach((action) => store.dispatch(action));

    const actual = store.getState().counter;
    const expected = { count: 10 };
    expect(actual).toEqual(expected);
  });

  // DECREMENT //
  it("should handle DECREMENT by 1", () => {
    const actionsList = [actions.decrement(1)];

    actionsList.forEach((action) => store.dispatch(action));

    const actual = store.getState().counter;
    const expected = { count: -1 };
    expect(actual).toEqual(expected);

  });
  it("should handle DECREMENT by 1 three times", () => {
    const actionsList = [
        actions.decrement(1),
        actions.decrement(1),
        actions.decrement(1),
    ];

    actionsList.forEach((action) => store.dispatch(action));

    const actual = store.getState().counter;
    const expected = { count: -3 };
    expect(actual).toEqual(expected);
  });

  it("should handle DECREMENT by different margins", () => {
    const actionsList = [
        actions.decrement(3),
        actions.decrement(2),
        actions.decrement(5),
    ];

    actionsList.forEach((action) => store.dispatch(action));

    const actual = store.getState().counter;
    const expected = { count: -10 };
    expect(actual).toEqual(expected);
  });
  

  // RESET //
  it("should handle RESET", () => {
    const actionsList = [
        actions.increment(2),
        actions.increment(2),
        actions.decrement(1),
        actions.reset(),
      ];
  
      actionsList.forEach((action) => store.dispatch(action));
  
      const actual = store.getState().counter;
      const expected = initialState;
      expect(actual).toEqual(expected);
  });

  // MIX //
  it("should handle INCREMENT, DECREMENT AND RESET mixed up", () => {
    const actionsList = [
        actions.increment(2),
        actions.increment(3),
        actions.reset(),
        actions.decrement(11),
        actions.increment(7),
      ];
  
      actionsList.forEach((action) => store.dispatch(action));
  
      const actual = store.getState().counter;
      const expected = { count: -4 };
      expect(actual).toEqual(expected);
  });
});
