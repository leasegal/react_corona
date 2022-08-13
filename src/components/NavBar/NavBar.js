import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Select from "../Select/Select";

const NavBar = ({ countries,setCode}) => {
  return (
    <div>
      <h2>covid 19 coronavirus tracker</h2>
      <Link to={"/"}>HOME</Link>
      <Select countries={countries} setCode={setCode}/>
      <Link to={"/about"}>ABOUT</Link>
    </div>
  );
};

export default NavBar;
