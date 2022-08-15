import styles from "./country.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import React from "react";
import Display from "../../components/display/Display";
import { useParams } from "react-router-dom";

const Country = ({ countries, numberWithCommas, code ,nameOfCountry}) => {
 
  // const countryName = useParams().country;
console.log("countryNameCountry: ", nameOfCountry);
console.log("codeOnCountry: ",code);
const [choosedCountry, setChoosedCountry] =useState({})
var contentData={};
  useEffect(() => {
  
    async function fetchDataOfCountry() {
      console.log("codeInUseEffect: ",code);
      var url = `https://corona-api.com/countries/${code}`;
      var content = await axios.get(url);
      // contentData = content.data.data;
      // console.log("contentData.latest_data.useEffect",contentData.latest_data);
      // setChoosedCountry(contentData);//לא טוב לעשות סטייט בתוך היוז אפקט כיוון שלוקח זמן לסטייט להתעדכן ומימילא כבר יוצא החוצה ולא יודע לעבוד על המשתנה התקין לכן הכנסתי את מה שהתקבל במשתנה רגיל
      // console.log("choosedCountryUseEffect: ", choosedCountry);
      setChoosedCountry(content.data.data)
      console.log("setChoosedCountryInUseEffect: ",choosedCountry);
    }
    fetchDataOfCountry();
  },[code]);

console.log("setChoosedCountryAfterUseEffect.latest_data: ",choosedCountry.latest_data);

  
  //כל הבעיה היא שמחוץ ליוז אפקט לא התעדכן לי הדאטה הנכון למה ????
  // const latestData = contentData.latest_data;
  // console.log("latestDataAfterUseEffect:",latestData);

  // // console.log("choosedCountry.latest_data: ", contentData.latest_data);
  const { deaths, recovered, critical, confirmed } = choosedCountry.latest_data;
  const objTodayDataChoosedCountry = {
    cases: confirmed,
    deaths,
    recovered,
    critical,
    today: choosedCountry.today.confirmed,
  };
  console.table(objTodayDataChoosedCountry);

  return (
    <div>
      <div>
        {choosedCountry.name} {choosedCountry.updated_at.split("T")[0]}
      </div>
      <Display
        object={objTodayDataChoosedCountry}
        numberWithCommas={numberWithCommas}
      />
    </div>
  );
};

export default Country;
