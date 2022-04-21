import { createStore, combineReducers } from "redux";
import { getCitiesReducer, getOneCityReducer } from "./reducer";

const reducer = combineReducers({
  cities: getCitiesReducer,
  city: getOneCityReducer,
});

export const store = createStore(reducer);
