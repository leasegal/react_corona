import React from "react";
import { useNavigate } from "react-router-dom";

const Select = ({ countries,setCode}) => {
  const navigate = useNavigate();
  countries.sort(function (x, y) {
    return x.name - y.name;
  });
  return (
    <select
      onChange={(e) => {
        navigate("../" + e.target.value);
        const found=(countries.find((el) => {
          return el.name == e.target.value;
        }))
        console.log("found.code: ",found.code);
        setCode(found.code)
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
