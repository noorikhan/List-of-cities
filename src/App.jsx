import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";
import { EditDetails } from "./components/EditDetails";
import { AddCity } from "./components/addCity";
import { AddCountry } from "./components/addCountry";
import { Table } from "./components/Table";
import { AllRoutes } from "./Routes/Router";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      {/* <Home />
      <Navbar />
      <EditDetails />
      <AddCity />
      <AddCountry />
      <Table /> */}
      <AllRoutes />
    </div>
  );
}

export default App;
