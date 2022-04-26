import React from "react";
import { useState } from "react";
import axios from "axios";
import { Container, Input, Button, FormLabel } from "@chakra-ui/react";

export const AddCountry = () => {
  const [country, setCountry] = useState("");

  const postData = () => {
    axios
      .post("https://country-city-population.herokuapp.com/countries", {
        country,
      })
      .then((res) => console.log(res))
      .catch((err) => console.error(err));

    alert("Country Added successfully.");
  };

  return (
    <>
      <Container>
        <FormLabel>Enter Country Name</FormLabel>
        <Input
          type="text"
          onChange={(e) => {
            setCountry(e.target.value);
          }}
        />
        <Button
          onClick={() => {
            postData();
          }}
        >
          Submit
        </Button>
      </Container>
    </>
  );
};
