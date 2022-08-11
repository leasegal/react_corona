import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Display from "../../components/display/Display";
import styles from "./Home.module.css";
const Home = ({ numberWithCommas }) => {
  const [today, setToday] = useState({});

  useEffect(() => {
    async function fetchData() {
      const url = "https://corona-api.com/timeline";
      const { data } = await axios.get(url);
      const todayData = data.data[0];
      setToday(todayData);
      console.log("today: ", todayData.updated_at);
      
    }
    fetchData();
  }, []);

  const { deaths, recovered, new_recovered, new_deaths, date } = today;
  let objToDisplay = { deaths, recovered, new_recovered, new_deaths };

  return (
    <div >
      <h3>correct data for: {date}</h3>
      <h3>Total Cases <br/>{numberWithCommas(today.confirmed)}</h3>
      <Display  object={objToDisplay} numberWithCommas={numberWithCommas}/>
    </div>
  );
};

export default Home;
