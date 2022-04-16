import React, { useEffect, useState } from "react";
import axios from "axios";

export const AddCity = () => {
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
    getCountry();
  }, []);

  const postData = () => {
    axios
      .post(" http://localhost:8080/cities", city)
      .then((res) => console.log(res.data))
      .catch((err) => console.error(err));
  };

  const getCountry = () => {
    axios
      .get("http://localhost:8080/countries")
      .then((res) => setCountry(res.data))
      .catch((err) => console.error(err));
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
          {country.map((ele) => (
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
