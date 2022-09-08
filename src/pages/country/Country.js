import styles from "./country.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import React from "react";
import Display from "../../components/display/Display";
import { useParams } from "react-router-dom";
import Pie from "../../components/Pie/ChartPie";
import ChartPie from "../../components/Pie/ChartPie";

const Country = ({ countries, numberWithCommas, nameOfCountry }) => {
  console.log("nameOfCountryCountry: ", nameOfCountry);
  console.log("allcountries: ", countries);
  const countryName = useParams().country;

  const nowCountry = countries.filter((el) => el.name === countryName)[0];

  console.log("nowCountry.latest_data:", nowCountry.latest_data);

  const { deaths, recovered, critical, confirmed } = nowCountry.latest_data;
  const objTodayDataChoosedCountry = {
    cases: confirmed,
    deaths: deaths,
    recovered,
    critical,
    today: nowCountry.today.confirmed,
  };
  const values = Object.values(objTodayDataChoosedCountry);

  console.table(objTodayDataChoosedCountry);
  return (
    <div>
      <div>
        {nowCountry.name} {nowCountry.updated_at.split("T")[0]}
      </div>

      <Display
        object={objTodayDataChoosedCountry}
        numberWithCommas={numberWithCommas}
      />
    </div>
  );
};

export default Country;
