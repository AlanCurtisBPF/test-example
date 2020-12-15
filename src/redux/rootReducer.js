import { combineReducers } from "redux";

import counter from "./reducers/counter/counterReducer";

export default combineReducers({
  counter,
});