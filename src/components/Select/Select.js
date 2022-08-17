import React from "react";
import { useNavigate } from "react-router-dom";

const Select = ({ countries, nameOfCountry, setNameOfCountry }) => {
  const navigate = useNavigate();

  function handleChange(e) {
    const { value } = e.target;
    setNameOfCountry(value);
    navigate("../" + value);
  }

  return (
    <select
      value={nameOfCountry}
      onChange={(e) => {
        handleChange(e);
      }}
    >
      <option value={""}></option>
      {countries.map((el, i) => (
        <option value={el.name} key={el.code}>
          {el.name}
        </option>
      ))}
    </select>
  );
};

export default Select;
