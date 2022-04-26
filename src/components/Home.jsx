import React from "react";
import { TableData } from "./Table";
import { SortingFiltering } from "./SortingandFiltering";
import { Box, Container } from "@chakra-ui/react";

export const Home = () => {
  return (
    <div>
      <Container>
        <SortingFiltering />
      </Container>

      <Box>
        <TableData />
      </Box>
    </div>
  );
};
