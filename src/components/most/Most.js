import styles from "./Most.module.css";
import React from "react";
import { useNavigate } from "react-router-dom";

const Most = ({ object, setNameOfCountry }) => {
  const navigate = useNavigate();
  const { countries, paramToSort1, paramToSort2, numberWithCommas, title } =
    object;
  countries.sort(function (x, y) {
    return y[paramToSort1][paramToSort2] - x[paramToSort1][paramToSort2];
  });

  const sortCountries = countries.slice(0, 5);

  return (
    <div className={styles.most}>
      <h2>{title}</h2>

      {sortCountries.map((el, i) => {
        const { name } = el;
        return (
          <div
            key={name + i}
            onClick={() => {
              setNameOfCountry(name);
              navigate("../" + name);
            }}
          >
            <h5>
              {i + 1}. {el.name}{" "}
              {numberWithCommas(el[paramToSort1][paramToSort2])}
            </h5>
          </div>
        );
      })}
    </div>
  );
};

export default Most;
