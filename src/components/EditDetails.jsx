import React from "react";
import axios from "axios";
import { useParams } from "react-router";
import { useState, useEffect } from "react";
import { getOneTodo, updateTodo } from "../Redux/actions";
import { useDispatch, useSelector } from "react-redux";

export const EditDetails = () => {
  const { id } = useParams();

  const data = useSelector((store) => store.getOnetodo.todo);
  const dispatch = useDispatch();

  const [country, setCountry] = useState([]);
  const [city, setCities] = useState();

  const handleFormdata = (e) => {
    const { name, value } = e.target;
    setCities({ ...city, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postData();
  };

  useEffect(() => {
    getData();
    getCountry();
  }, []);

  const postData = () => {
    axios.patch(`http://localhost:8080/cities/${id}`, city).then(({ data }) => {
      dispatch(updateTodo(data));
      getData();
    });
  };

  const getCountry = () => {
    axios
      .get("http://localhost:8080/countries")
      .then((res) => setCountry(res.data))
      .catch((err) => console.error(err));
  };

  const getData = () => {
    axios
      .get(`http://localhost:8080/cities/${id}`)
      .then(({ data }) => dispatch(getOneTodo(data)))
      .catch((err) => console.error(err));
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          name="city"
          type="text"
          placeholder={data.city}
          onChange={handleFormdata}
        />
        <input
          name="population"
          type="number"
          placeholder={data.population}
          onChange={handleFormdata}
        />
        <select
          name="country"
          value={handleFormdata.country}
          onChange={handleFormdata}
        >
          {country.map((ele) => (
            <option value={ele.country}>{ele.country}</option>
          ))}
        </select>
        <input type="submit" value="submit" />
      </form>
    </>
  );
};
