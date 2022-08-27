import React from "react";
import { useEffect, useState } from "react";
import DisplayCountry from "../DisplayCountry/DisplayCountry";

import './Country.css'

const Country = () => {
  const [country, setCountry] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/currency/dollar")
      .then((res) => res.json())
      .then((data) => setCountry(data));
  }, []);

  return (
    <div>
      <div className="title">
        <h1>Countries all over the world!</h1>
        <h2>Total Country : {country.length}</h2>
      </div>
      <div className="country">
        {country.map((value) => (
          <DisplayCountry
            photo={value.flags.png}
            name={value.name.common}
            fullName={value.name.official}
          ></DisplayCountry>
        ))}
      </div>
    </div>
  );
};

export default Country;