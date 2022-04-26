import React, { useEffect } from "react";
import { Box, Stack, Button, Select, Container } from "@chakra-ui/react";
import {
  sortDataByPopulationAsc,
  sortDataByPopulationDesc,
  filterDataByCountry,
  getCountryData,
} from "../Redux/actions";
import { useDispatch, useSelector } from "react-redux";

export const SortingFiltering = () => {
  const { country } = useSelector((store) => store.cities);

  useEffect(() => {
    dispatch(getCountryData());
  }, []);

  const dispatch = useDispatch();

  const sortByPopulationAsc = () => {
    dispatch(sortDataByPopulationAsc());
  };

  const sortByPopulationDesc = () => {
    dispatch(sortDataByPopulationDesc());
  };

  const filterByCountry = (val) => {
    dispatch(filterDataByCountry(val));
  };

  return (
    <div>
      <Container>
        <Box w="100%" p={4} color="black">
          <Stack direction="row" spacing={4} align="center">
            <Button
              width="550px"
              colorScheme="teal"
              variant="outline"
              onClick={() => {
                sortByPopulationAsc();
              }}
            >
              Sort Population: Asc
            </Button>
            <Button
              width="600px"
              colorScheme="teal"
              variant="outline"
              onClick={() => {
                sortByPopulationDesc();
              }}
            >
              Sort Population: Desc
            </Button>
            <Select
              width="600px"
              borderColor="teal"
              color="teal"
              onChange={(e) => {
                filterByCountry(e.target.value);
              }}
              placeholder="Filter: Country"
            >
              {country.map((country) => (
                <option key={country.id} value={country.country}>
                  {country.country}
                </option>
              ))}
            </Select>
          </Stack>
        </Box>
      </Container>
    </div>
  );
};
