import React, { useEffect } from "react";
import { deleteRowData, getCityData } from "../Redux/actions";
import { useDispatch, useSelector } from "react-redux";

import {
  Table,
  Th,
  Td,
  Tr,
  Button,
  Thead,
  Tbody,
  TableContainer,
} from "@chakra-ui/react";
import { useNavigate } from "react-router";

export const TableData = () => {
  const navigate = useNavigate();
  const { city } = useSelector((store) => store.cities);

  const dispatch = useDispatch();

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    dispatch(getCityData());
  };

  const deleteRow = (id) => {
    dispatch(deleteRowData(id));
  };

  return (
    <div>
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>id</Th>
              <Th>Country</Th>
              <Th>City</Th>
              <Th>Population</Th>
              <Th>Edit</Th>
              <Th>Delete</Th>
            </Tr>
          </Thead>
          <Tbody>
            {city.map((ele) => (
              <Tr key={ele.id}>
                <Td>{ele.id}</Td>
                <Td>{ele.country}</Td>
                <Td>{ele.city}</Td>
                <Td>{ele.population}</Td>
                <Td>
                  <Button onClick={() => navigate(`/edit/${ele.id}`)}>
                    Edit
                  </Button>
                </Td>
                <Td>
                  <Button
                    onClick={() => {
                      getData();
                      deleteRow(ele.id);
                      getData();
                    }}
                  >
                    Delete
                  </Button>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </div>
  );
};
