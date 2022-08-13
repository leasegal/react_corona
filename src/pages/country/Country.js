import styles from "./country.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import React from "react";
import Display from "../../components/display/Display";
import { useParams } from "react-router-dom";

const Country = ({ countries, numberWithCommas, code }) => {
  const [choosedCountry, setChoosedCountry] = useState({});
  const countryName = useParams().country;
  console.log("countryName: ", countryName);

  useEffect(() => {
    async function fetchDataOfCountry() {
      var url = `https://corona-api.com/countries/${code}`;
      var content = await axios.get(url);
      var contentData = content.data.data;
      console.table(contentData);
      setChoosedCountry(contentData);
      // console.log("choosedCountry: ",choosedCountry );
    }
    fetchDataOfCountry();
  }, [code]);
  
  // console.log("ghgjghjh: ",choosedCountry);
  console.log("choosedCountry.latest_data: ",choosedCountry.latest_data);
  const { deaths, recovered, critical, confirmed } =
  choosedCountry.latest_data;
  const objTodayDataCountry = {
    "cases": confirmed,
    deaths,
    recovered,
    critical,
    "today": choosedCountry.today.confirmed,
  };

  return (
    <div>
      <div>
        {choosedCountry.name} {choosedCountry.updated_at.split("T")[0]}
      </div>
      <Display
        object={objTodayDataCountry}
        numberWithCommas={numberWithCommas}
      />
    </div>
  );
};

export default Country;
