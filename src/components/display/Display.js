import styles from "./Display.module.css";

import React from "react";

const Display = ({ object,numberWithCommas }) => {
  return (
    <div style={{ display: "flex" }}>
      {Object.keys(object).map((el, i) => {
        return (
          <div className={styles.displayData}>
            <h4>{el}</h4>
            <h3>{numberWithCommas(object[el])}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default Display;
