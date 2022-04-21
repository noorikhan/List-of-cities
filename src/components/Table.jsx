import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { getCities, getCountries } from "../Redux/actions";
import { useDispatch, useSelector } from "react-redux";

export const Table = () => {
  const { city, country } = useSelector((store) => store.cities);

  const dispatch = useDispatch();

  useEffect(() => {
    getData();
    getCountry();
  }, []);

  const getData = () => {
    axios
      .get("http://localhost:8080/cities")
      .then(({ data }) => dispatch(getCities(data)));
  };

  const deleteRow = (id) => {
    axios
      .delete(`http://localhost:8080/cities/${id}`)
      .then((res) => dispatch(getCities(data)))
      .catch((err) => console.error(err));
  };

  const getCountry = () => {
    axios
      .get("http://localhost:8080/countries")
      .then((res) => {
        dispatch(getCountries(res.data));
      })
      .catch((err) => console.error(err));
  };

  const sortByPopulationAsc = () => {
    axios
      .get("http://localhost:8080/cities?_sort=population&_order=asc")
      .then(({ data }) => dispatch(getCities(data)));
  };

  const sortByPopulationDesc = () => {
    axios
      .get("http://localhost:8080/cities?_sort=population&_order=desc")
      .then(({ data }) => dispatch(getCities(data)));
  };

  const filterByCountry = (val) => {
    axios
      .get(`http://localhost:8080/cities?country=${val}`)
      .then(({ data }) => dispatch(getCities(data)));
  };

  return (
    <>
      <div>
        <button
          onClick={() => {
            sortByPopulationAsc();
          }}
        >
          SortByPopulationAsc
        </button>
        <button
          onClick={() => {
            sortByPopulationDesc();
          }}
        >
          SortByPopulationDesc
        </button>
        <button>
          <select
            name="country"
            onChange={(e) => {
              filterByCountry(e.target.value);
            }}
          >
            <option value="">Filter By Country</option>
            {country.map((ele) => (
              <option key={ele.id} value={ele.country}>
                {ele.country}
              </option>
            ))}
          </select>
        </button>
      </div>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>Country</th>
            <th>City</th>
            <th>Population</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {city.map((ele) => (
            <tr key={ele.id}>
              <td>{ele.id}</td>
              <td>{ele.country}</td>
              <td>{ele.city}</td>
              <td>{ele.population}</td>
              <td>
                <Link to={`/edit/${ele.id}`}>
                  <button>Edit</button>
                </Link>
              </td>
              <td>
                <button
                  onClick={() => {
                    getData();
                    deleteRow(ele.id);
                    getData();
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
