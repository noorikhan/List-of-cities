import React from "react";
import axios from "axios";
import { useParams } from "react-router";
import { useState, useEffect } from "react";
import { getOneCityData, updateCity } from "../Redux/actions";
import { useDispatch, useSelector } from "react-redux";

export const EditDetails = () => {
  const { id } = useParams();

  const data = useSelector((store) => store.city.city);
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

  const getData = () => {
    dispatch(getOneCityData());
  };

  const postData = () => {
    axios
      .patch(`https://country-city-population.herokuapp.com/cities/${id}`, city)
      .then(({ data }) => {
        dispatch(updateCity(data));
        getData();
      });
  };

  const getCountry = () => {
    axios
      .get("https://country-city-population.herokuapp.com/countries")
      .then((res) => setCountry(res.data))
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
          <option value="">Filter By Country</option>
          {country.map((ele) => (
            <option value={ele.country}>{ele.country}</option>
          ))}
        </select>
        <input type="submit" value="submit" />
      </form>
    </>
  );
};
