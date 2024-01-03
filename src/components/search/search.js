import { url, geoApiOptions } from "../../api";
import { AsyncPaginate } from "react-select-async-paginate";
import React, { useState } from "react";
const Search = ({ onSearchChange }) => {
  const [search, setSearch] = useState(null);

  const loadOptions = async (inputValue) => {
    const response = await fetch(
      `${url}/cities?minPopulation=1000000&namePrefix=${inputValue}`,
      geoApiOptions
    );
    try {
      const response_1 = await response
        .json();
      return {
        options: response_1.data.map((city) => {
          return {
            value: `${city.latitude} ${city.longitude}`,
            label: `${city.name}, ${city.countryCode}`,
          };
        }),
      };
    } catch (err) {
      return console.error(err);
    }
  };

  const handleOnchange = (searchData) => {
    setSearch(searchData);
    onSearchChange(searchData);
  };
  return (
    <AsyncPaginate
      placeholder="Search for city"
      debounceTimeout={700}
      value={search}
      onChange={handleOnchange}
      loadOptions={loadOptions}
    />
  );
};
export default Search;
