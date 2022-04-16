import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <Link to="/">Home</Link>
      <Link to="/add-city" style={{ margin: "0px 10px" }}>
        Add City
      </Link>
      <Link to="/add-country">Add Country</Link>
    </>
  );
};
