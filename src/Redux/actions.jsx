export const GET_CITIES = "GET_CITIES";
export const GET_COUNTRIES = "GET_COUNTRIES";
export const GET_ONE_CITY = "GET_ONE_CITY";
export const REMOVE_ONE_CITY = "REMOVE_ONE_CITY";
export const UPDATE_ONE_CITY = "UPDATE_ONE_CITY";
import axios from "axios";

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

export const getCityData = () => (dispatch) => {
  axios
    .get("https://country-city-population.herokuapp.com/cities")
    .then(({ data }) => dispatch(getCities(data)));
};

export const getCountryData = () => (dispatch) => {
  axios
    .get("https://country-city-population.herokuapp.com/countries")
    .then((res) => {
      dispatch(getCountries(res.data));
    })
    .catch((err) => console.error(err));
};

export const deleteRowData = (id) => (dispatch) => {
  axios
    .delete(`https://country-city-population.herokuapp.com/cities/${id}`)
    .then((res) => dispatch(getCities(data)))
    .catch((err) => console.error(err));
};

export const sortDataByPopulationAsc = () => (dispatch) => {
  axios
    .get(
      "https://country-city-population.herokuapp.com/cities?_sort=population&_order=asc"
    )
    .then(({ data }) => dispatch(getCities(data)));
};

export const sortDataByPopulationDesc = () => (dispatch) => {
  axios
    .get(
      "https://country-city-population.herokuapp.com/cities?_sort=population&_order=desc"
    )
    .then(({ data }) => dispatch(getCities(data)));
};

export const filterDataByCountry = (val) => (dispatch) => {
  axios
    .get(`https://country-city-population.herokuapp.com/cities?country=${val}`)
    .then(({ data }) => dispatch(getCities(data)));
};

export const getOneCityData = (id) => (dispatch) => {
  axios
    .get(`https://country-city-population.herokuapp.com/cities/${id}`)
    .then(({ data }) => dispatch(getOnecity(data)))
    .catch((err) => console.error(err));
};
