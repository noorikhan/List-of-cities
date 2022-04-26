import React from "react";
import axios from "axios";
import { useParams } from "react-router";
import { useState, useEffect } from "react";
import { getOneCityData, updateCity, getCountryData } from "../Redux/actions";
import { useDispatch, useSelector } from "react-redux";
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

export const EditDetails = () => {
  const { id } = useParams();

  const data = useSelector((store) => store.city.city);
  const dispatch = useDispatch();

  const countries = useSelector((store) => store.cities.country);

  const [cityData, setCities] = useState();
  const [population, setPopulation] = useState();

  const handleFormdata = (e) => {
    const { name, value } = e.target;
    setCities({ ...cityData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postData();
    alert("Upadated successfully");
  };

  useEffect(() => {
    getData();
    getCountry();
  }, []);

  const getData = () => {
    dispatch(getOneCityData(id));
  };

  const postData = () => {
    axios
      .patch(`https://country-city-population.herokuapp.com/cities/${id}`, {
        country: cityData.country,
        population: +population,
        city: cityData.city,
      })
      .then(({ data }) => {
        dispatch(updateCity(data));
        getData();
      });
  };

  const getCountry = () => {
    dispatch(getCountryData());
  };

  return (
    <>
      <Container>
        <form onSubmit={handleSubmit}>
          <FormLabel>City Name</FormLabel>
          <Input
            name="city"
            type="text"
            placeholder={data.city}
            onChange={handleFormdata}
            required
          />

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

          <Select
            name="country"
            defaultValue={handleFormdata.country}
            onChange={handleFormdata}
            required
          >
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
