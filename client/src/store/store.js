import { combineReducers, legacy_createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { listReducer } from "./messageList/list.reducer";

// export const rootReducer = combineReducers({
//   list: listReducer,
// });

// used combineReducers before but there is no point to using it as there is only one reducer function

export const store = legacy_createStore(listReducer, applyMiddleware(thunk));
