import styles from "./Total.module.css";
import React from "react";

const Total = ({ countries }) => {
  let death = 0;
  let recovered = 0;
  let newcases = 0;
  let newdeath = 0;

  function sumEl(elToSum){
    countries.map((country) => elToSum += country[elToSum])
     }
  return (
    <div>
      <h2>Total cases</h2>
    <div>{sumEl(death)}</div>
    </div>
  );
};

export default Total;
