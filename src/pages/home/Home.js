import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Display from "../../components/display/Display";
import Most from "../../components/most/Most";

const Home = ({
  numberWithCommas,
  countries,
  nameOfCountry,
  setNameOfCountry,
}) => {
  const [today, setToday] = useState({});

  useEffect(() => {
    async function fetchData() {
      const url = "https://corona-api.com/timeline";
      const { data } = await axios.get(url);
      const todayData = data.data[0];
      setToday(todayData);
      console.log("Total Cases: ", todayData.deaths + todayData.confirmed);
    }
    fetchData();
  }, []);
  const arrayObjMost = [
    {
      countries: countries,
      paramToSort1: "latest_data",
      paramToSort2: "deaths",
      numberWithCommas,
      title: "most deaths all time",
    },
    {
      countries: countries,
      paramToSort1: "latest_data",
      paramToSort2: "confirmed",
      numberWithCommas,
      title: "most confirmed all time",
    },
    {
      countries: countries,
      paramToSort1: "today",
      paramToSort2: "deaths",
      numberWithCommas,
      title: "most deaths today",
    },
    {
      countries: countries,
      paramToSort1: "today",
      paramToSort2: "confirmed",
      numberWithCommas,
      title: "most confirmed today",
    },
  ];

  const { recovered, confirmed, deaths, date, new_confirmed, new_deaths } =
    today;
  let objToDisplay = {
    deaths,
    recovered,
    "new cases": new_confirmed,
    "new deaths": new_deaths,
  };
  return (
    <div>
      <h3>correct data for: {date}</h3>
      <h3>
        Total Cases <br />
        {numberWithCommas(deaths + confirmed)}
      </h3>

      <Display object={objToDisplay} numberWithCommas={numberWithCommas} />
      <div style={{ display: "flex" }}>
        {arrayObjMost.map((el, i) => {
          return (
            <Most
              object={el}
              key={el.paramToSort1 + el.paramToSort2}
              setNameOfCountry={setNameOfCountry}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Home;
