import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getCountryData } from "../Redux/actions";

export const AddCity = () => {
  const countries = useSelector((store) => store.cities.country);

  const dispatch = useDispatch();

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
    getCountry();
  }, []);

  const postData = () => {
    axios
      .post("https://country-city-population.herokuapp.com/cities", city)
      .then((res) => console.log(res.data))
      .catch((err) => console.error(err));
  };

  const getCountry = () => {
    dispatch(getCountryData());
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          name="city"
          type="text"
          placeholder="enterCity"
          onChange={handleFormdata}
        />
        <input
          name="population"
          type="number"
          placeholder="enterpopulation"
          onChange={handleFormdata}
        />
        <select
          name="country"
          value={handleFormdata.country}
          onChange={handleFormdata}
        >
          <option value="">Select Country</option>
          {countries.map((ele) => (
            <option key={ele.id} value={ele.country}>
              {ele.country}
            </option>
          ))}
        </select>
        <input type="submit" value="submit" />
      </form>
    </>
  );
};
