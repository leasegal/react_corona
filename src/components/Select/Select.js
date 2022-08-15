import React from "react";
import { useNavigate } from "react-router-dom";

const Select = ({
  countries,
  setCode,
  code,
  nameOfCountry,
  setNameOfCountry,
}) => {
  const navigate = useNavigate();

  // countries.sort(function (x, y) {
  //   return x.name - y.name;
  // });
  // console.table(countries)

  function handleChange(e) {
    const { value } = e.target;
    setNameOfCountry(value);
    console.log("nameOfCountrySelect: ",nameOfCountry);
    const found=(countries.find((el) => {
      return el.name == e.target.value;
    }))
    console.log("found.code: ",found.code);
    setCode(found.code)
    // console.log("codeInSelect: ",code);
    // console.log("found.code: ",found.code);
    // setCode(found.code)
    // console.log("codeNow: ",code);
    navigate("../" + value);
  }

  return (
    // navigate("../" + e.target.value);
    // const found=(countries.find((el) => {
    //   return el.name == e.target.value;
    // }))
    // console.log("found.code: ",found.code);
    // setCode(found.code)
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
