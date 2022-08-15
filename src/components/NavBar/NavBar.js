import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Select from "../Select/Select";

const NavBar = ({ countries,setCode,code,nameOfCountry,setNameOfCountry}) => {
  return (
    <div>
      <h2>covid 19 coronavirus tracker</h2>
      <Link to={"/"} onClick={()=>{setNameOfCountry("")}}>HOME</Link>
      <Select countries={countries} setCode={setCode} code={code} nameOfCountry={nameOfCountry} setNameOfCountry={setNameOfCountry}/>
      <Link to={"/about"}>ABOUT</Link>
    </div>
  );
};

export default NavBar;
