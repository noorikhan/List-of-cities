import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getCountryData } from "../Redux/actions";
import {
  Container,
  FormLabel,
  Input,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Select,
} from "@chakra-ui/react";

export const AddCity = () => {
  const countries = useSelector((store) => store.cities.country);

  const dispatch = useDispatch();

  const [cityData, setCitiesData] = useState({});
  const [population, setPopulation] = useState();

  const handleFormdata = (e) => {
    const { name, value } = e.target;
    setCitiesData({ ...cityData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postData();
    alert("Posted data successfully");
  };

  const getCountry = () => {
    dispatch(getCountryData());
  };

  useEffect(() => {
    getCountry();
  }, []);

  const postData = () => {
    axios
      .post("https://country-city-population.herokuapp.com/cities", {
        country: cityData.country,
        population: +population,
        city: cityData.city,
      })
      .then((res) => console.log(res))
      .catch((err) => console.error(err));
  };

  return (
    <>
      <Container>
        <form onSubmit={handleSubmit}>
          <FormLabel>City Name</FormLabel>
          <Input name="city" type="text" onChange={handleFormdata} required />

          <FormLabel>City Population</FormLabel>
          <NumberInput
            onChange={(e) => {
              setPopulation(e);
            }}
            required
          >
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>

          <Select name="country" onChange={handleFormdata} required>
            <option value="">Select Country</option>
            {countries.map((ele) => (
              <option value={ele.country}>{ele.country}</option>
            ))}
          </Select>
          <Input type="submit" value="Submit" />
        </form>
      </Container>
    </>
  );
};
