import React from "react";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import axios from "axios";
import Select from "./components/Select/Select";
import Total from "./components/Total/Total";
import Home from "./pages/home/Home";
import Country from "./pages/home/country/Country";
function App() {
  function numberWithCommas(x) {
    return x?.toString()?.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  const [code, setCode] = useState("");
  const [countries, setCountries] = useState([]);
  const [choosedCountry, setChoosedCountry] = useState("");

  useEffect(() => {
    try {
      async function fetchData() {
        const coronaApi = "https://corona-api.com/countries";
        const { data } = await axios.get(coronaApi);
        setCountries(data.data);
        console.log(`countries: ${countries}`);
      }
      fetchData();
    } catch (err) {
      console.log(err.message);
    }
  }, []);

  return (
    <div className="App">
      <NavBar
        countries={countries}
        choosedCountry={choosedCountry}
        setChoosedCountry={setChoosedCountry}
        code={code} setCode={setCode}
      />
      <Routes>
        <Route
          path="/"
          element={<Home numberWithCommas={numberWithCommas} />}
        />
        <Route
          path="/country"
          element={<Country numberWithCommas={numberWithCommas} 
          code={code}/>}
        />
        <Route />
        <Route />
      </Routes>
    </div>
  );
}

export default App;
