import React from "react";
import { Route, Routes } from "react-router";
import { AddCity } from "../components/AddCity";
import { AddCountry } from "../components/AddCountry";
import { EditDetails } from "../components/EditDetails";
import { Home } from "../components/Home";
import { Navbar } from "../components/Navbar";

export const AllRoutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/add-country" element={<AddCountry />}></Route>
        <Route path="/add-city" element={<AddCity />}></Route>
        <Route path="/edit/:id" element={<EditDetails />}></Route>
      </Routes>
    </>
  );
};
