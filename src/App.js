import React from "react";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import axios from "axios";
import Home from "./pages/home/Home";
import Country from "./pages/country/Country";
import About from "./pages/About/About";

function App() {
  function numberWithCommas(x) {
    return x?.toString()?.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  const [countries, setCountries] = useState([]);
  const [code, setCode] = useState("IL");
  const [nameOfCountry, setNameOfCountry] = useState("");

  useEffect(() => {
    try {
      async function fetchData() {
        const coronaApi = "https://corona-api.com/countries";
        const { data } = await axios.get(coronaApi);
        setCountries(data.data);
        // console.table(countries);
      }
      fetchData();
    } catch (err) {
      console.log(err.message);
    }
  }, []);

  return (
    <div className="App">
      <NavBar countries={countries} setCode={setCode} code={code} nameOfCountry={nameOfCountry} setNameOfCountry={setNameOfCountry}/>
      <Routes>
        <Route 
          path="/"
          element={
            <Home numberWithCommas={numberWithCommas} countries={countries} nameOfCountry={nameOfCountry} setNameOfCountry={setNameOfCountry}/>
          }
        />
        <Route
          path="/:country"
          element={<Country numberWithCommas={numberWithCommas} code={code} nameOfCountry={nameOfCountry}/>}
        />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
