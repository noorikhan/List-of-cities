export const GET_CITIES = "GET_CITIES";
export const GET_COUNTRIES = "GET_COUNTRIES";
export const GET_ONE_CITY = "GET_ONE_CITY";
export const REMOVE_ONE_CITY = "REMOVE_ONE_CITY";
export const UPDATE_ONE_CITY = "UPDATE_ONE_CITY";

export const getCities = (payload) => ({
  type: GET_CITIES,
  payload,
});

export const getCountries = (payload) => ({
  type: GET_COUNTRIES,
  payload,
});

export const getOnecity = (payload) => ({
  type: GET_ONE_CITY,
  payload,
});

export const removeCity = (payload) => ({
  type: REMOVE_ONE_CITY,
  payload,
});

export const updateCity = (payload) => ({
  type: UPDATE_ONE_CITY,
  payload,
});
