import React from "react";
import { useState } from "react";
import axios from "axios";

export const AddCountry = () => {
  const [country, setCountry] = useState("");

  const postData = () => {
    axios
      .post("http://localhost:8080/countries", { country })
      .then((res) => console.log(res))
      .catch((err) => console.error(err));
  };

  return (
    <>
      <input
        type="text"
        placeholder="enterCountryName"
        onChange={(e) => {
          setCountry(e.target.value);
        }}
      />
      <button
        onClick={() => {
          postData();
        }}
      >
        Submit
      </button>
    </>
  );
};
