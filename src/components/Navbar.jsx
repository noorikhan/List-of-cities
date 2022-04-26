import React from "react";
import { Box, Button, Flex, HStack, Stack } from "@chakra-ui/react";
import { useNavigate } from "react-router";

export const Navbar = () => {
  const navigate = useNavigate();
  return (
    <>
      <Box p="10px" bg="tomato" w="100%" color="black">
        <Flex justifyContent="space-around">
          <Button
            colorScheme="white"
            variant="link"
            onClick={() => {
              navigate("/");
            }}
          >
            Home
          </Button>
          <Button
            colorScheme="white"
            variant="link"
            onClick={() => {
              navigate("/add-city");
            }}
          >
            Add City
          </Button>
          <Button
            colorScheme="white"
            variant="link"
            onClick={() => {
              navigate("/add-country");
            }}
          >
            Add Country
          </Button>
        </Flex>
      </Box>
    </>
  );
};
