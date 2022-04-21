import { GET_ONE_CITY, GET_CITIES, REMOVE_ONE_CITY } from "./actions";

const initialCities = {
  city: [],
};
export const getCitiesReducer = (store = initialCities, { type, payload }) => {
  switch (type) {
    case GET_CITIES:
      return { ...store, city: payload };
    case REMOVE_ONE_CITY:
      return { ...store, city: payload };
    default:
      return store;
  }
};

const initialOneCitiy = {
  city: {},
};
export const getOneCityReducer = (
  store = initialOneCitiy,
  { type, payload }
) => {
  switch (type) {
    case GET_ONE_CITY:
      return { store, city: payload };
    default:
      return store;
  }
};
