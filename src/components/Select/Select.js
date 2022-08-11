import React from "react";
import { useNavigate } from "react-router-dom";

const Select = ({
  countries,
  choosedCountry,
  setChoosedCountry,
  code,
  setCode,
}) => {
  const handlechange = (e) => {
    setChoosedCountry(e.target.value);
    // const code = e.target.getAttribute('data-key');
    const found = countries.find((el, i) => {
      return el.name == e.target.value;
    });
    console.log("found: ", found.code);
    setCode(found.code);
    console.log("code: ", code);

  };
  return (
    <select
      onChange={(e) => {
        handlechange(e);
      }}
    >
      <option value={""} selected></option>
      {countries.map((el, i) => (
        <option value={el.name} key={i + el.name}>
          {el.name}
        </option>
      ))}
    </select>
  );
};

export default Select;
