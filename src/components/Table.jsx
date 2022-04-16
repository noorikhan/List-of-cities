import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {
  getTodo,
  sortByCountry,
  sortByPopulationDesc,
  sortByPopulationAsc,
} from "../Redux/actions";
import { useDispatch, useSelector } from "react-redux";

export const Table = () => {
  const data = useSelector((store) => store.getAllTodos.todo);

  const dispatch = useDispatch();

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios
      .get("http://localhost:8080/cities")
      .then(({ data }) => dispatch(getTodo(data)));
  };

  const deleteRow = (id) => {
    axios
      .delete(`http://localhost:8080/cities/${id}`)
      .then((res) => dispatch(getTodo(data)))
      .catch((err) => console.error(err));
  };

  return (
    <>
      <div>
        <button onClick={() => dispatch(sortByCountry(data))}>
          FilterByCountry
        </button>
        <button
          onClick={() => {
            dispatch(sortByPopulationAsc(data));
          }}
        >
          SortByPopulationAsc
        </button>
        <button
          onClick={() => {
            dispatch(sortByPopulationDesc(data));
          }}
        >
          SortByPopulationDesc
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
          {data.map((ele) => (
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
