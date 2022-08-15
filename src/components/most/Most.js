import styles from "./Most.module.css";
import React from "react";
import Country from "../../pages/country/Country";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Most = ({ object,setNameOfCountry,nameOfCountry }) => {
  const navigate= useNavigate();
  const { countries, paramToSort1, paramToSort2, numberWithCommas, title } =
    object;
  countries.sort(function (x, y) {
    return y[paramToSort1][paramToSort2] - x[paramToSort1][paramToSort2];
  });

  const sortCountries = countries.slice(0, 5);
  // console.table(sortCountries);
  // console.log(sortCountries[0][paramToSort1[paramToSort2]]);

  return (
    <div className={styles.most}>
      <h2>{title}</h2>

      {sortCountries.map((el, i) => {
        const {name} =el;
        return (
          <Link to={"../"+name}  key={name+i} onClick={()=>{setNameOfCountry(name);}}> <h5 >
          {i + 1}. {el.name}{" "}
          {numberWithCommas(el[paramToSort1][paramToSort2])}
        </h5></Link>
         
        );
      })}
    </div>
  );
};

export default Most;
