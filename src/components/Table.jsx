import React, { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {
  deleteRowData,
  sortDataByPopulationAsc,
  sortDataByPopulationDesc,
  filterDataByCountry,
  getCityData,
  getCountryData,
} from "../Redux/actions";
import { useDispatch, useSelector } from "react-redux";

export const Table = () => {
  const { city, country } = useSelector((store) => store.cities);

  const dispatch = useDispatch();

  useEffect(() => {
    getData();
    getCountry();
  }, []);

  const getData = () => {
    dispatch(getCityData());
  };

  const getCountry = () => {
    dispatch(getCountryData());
  };

  const deleteRow = (id) => {
    dispatch(deleteRowData(id));
  };

  const sortByPopulationAsc = () => {
    dispatch(sortDataByPopulationAsc());
  };

  const sortByPopulationDesc = () => {
    dispatch(sortDataByPopulationDesc());
  };

  const filterByCountry = (val) => {
    dispatch(filterDataByCountry(val));
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
