import React, { useEffect, useState } from 'react';
import './App.css';
import {FormControl, Select, MenuItem} from '@material-ui/core';


function App() {

  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState("worldwide");

  useEffect(() => {
    const getCountriesData = async () => {
      await fetch("https://disease.sh/v3/covid-19/countries")
      .then((response) =>  response.json())
      .then((data) => {
        const countries = data.map(country => (
          {
            name: country.country,
            value: country.countryInfo.iso2
          }
        ));
        setCountries(countries);
      });
    };

    getCountriesData();
  }, []);

  const onCountryChange = (event) => {
    const countryCode = event.target.value;
    setCountry(countryCode);
  }

  return (
    <div className="app">
      
      {/* Header */} {/* Title + Select input dropdown field */}
      <div className="app__header">
        <h1>COVID-19 TRACKER</h1>
        <FormControl className="app__dropdown">
          <Select variant="outlined" onChange={onCountryChange} value={country}>
            <MenuItem value="worldwide">Worldwide</MenuItem>
            {/* Loop through all the countries and show a drop down list */}
            {
              countries.map(country => (
                <MenuItem value={country.value}>{country.name}</MenuItem>
              ))
            }

          </Select>
        </FormControl>
      </div>
      

      
     
      {/* Infograph */}
      {/* Infograph */}
      {/* Infograph */}

      {/* Table */}
      {/* Graph */}

      {/* Map */}

    </div>
  );
}

export default App;
