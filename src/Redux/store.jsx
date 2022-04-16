import { createStore, combineReducers } from "redux";
import { getTodosReducer } from "./reducer";
import { getOneTodoReducer } from "./reducer";

const reducer = combineReducers({
  getAllTodos: getTodosReducer,
  getOnetodo: getOneTodoReducer,
});

export const store = createStore(reducer);
