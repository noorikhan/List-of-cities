import { createStore, combineReducers, applyMiddleware } from "redux";
import { getCitiesReducer, getOneCityReducer } from "./reducer";
import thunk from "redux-thunk";

const reducer = combineReducers({
  cities: getCitiesReducer,
  city: getOneCityReducer,
});

export const store = createStore(reducer, applyMiddleware(thunk));
