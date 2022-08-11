import styles from "./country.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import React from "react";
import Display from "../../../components/display/Display";

const Country = ({ numberWithCommas,code }) => {
  const [todayDataCountry, setTodayDataCountry] = useState({});
  useEffect(() => {
    async function fetchDataOfCountry() {
      const url = `https://corona-api.com/countries/${code}`
      const content = await axios.get(url);
      const contentData = content.data.data;
      setTodayDataCountry(contentData);
      console.log("todayDataCountry: ", todayDataCountry.today);
    }
    fetchDataOfCountry();
  }, [code]);

  const { deaths, recovered, critical,confirmed } = todayDataCountry.latest_data;
  const objTodayDataCountry = {
    confirmed,
    deaths,
    recovered,
    critical,
    // cases: todayDataCountry.timeline[0].active,
    today: todayDataCountry.today.confirmed,
  };
  

  return (
    <div>
      <div>{todayDataCountry.name} {todayDataCountry.updated_at.split("T")[0]}</div>
      <Display
        object={objTodayDataCountry}
        numberWithCommas={numberWithCommas}
      />
    </div>
  );
};

export default Country;
