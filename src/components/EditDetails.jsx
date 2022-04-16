import React from "react";
import axios from "axios";
import { useParams } from "react-router";
import { useState, useEffect } from "react";

export const EditDetails = () => {
  const { id } = useParams();

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
    axios
      .patch(`http://localhost:8080/cities/${id}`, city)
      .then((res) => console.log(res.data))
      .catch((err) => console.error(err));
  };

  const getCountry = () => {
    axios
      .get("http://localhost:8080/countries")
      .then((res) => setCountry(res.data))
      .catch((err) => console.error(err));
  };

  const [data, setData] = useState([]);
  const getData = () => {
    axios
      .get(`http://localhost:8080/cities/${id}`)
      .then((res) => setData(res.data));
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
