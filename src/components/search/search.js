import { url, geoApiOptions } from "../../api";
import { AsyncPaginate } from "react-select-async-paginate";
import { useState } from "react";
const Search = ({ onSearchChange }) => {
  const [search, setSearch] = useState(null);

  const loadOptions = (inputValue) => {
    return fetch(
      `${url}/cities?minPopulation=1000000&namePrefix=${inputValue}`,
      geoApiOptions
    ).then((response) =>
      response
        .json()
        .then((response) => {
          return {
            options: response.data.map((city) => {
              return {
                value: `${city.latitude} ${city.longitude}`,
                label: `${city.name}, ${city.countryCode}`,
              };
            }),
          };
        })
        .catch((err) => console.error(err))
    );
  };

  const handleOnchange = (searchData) => {
    setSearch(searchData);
    onSearchChange(searchData);
  };
  return (
    <AsyncPaginate
      placeholder="Search for city"
      debounceTimeout={600}
      value={search}
      onChange={handleOnchange}
      loadOptions={loadOptions}
    />
  );
};
export default Search;
