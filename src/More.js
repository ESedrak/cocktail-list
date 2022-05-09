import React, { useState } from "react";
import axios from "axios";
import MoreResults from "./MoreResults";

const More = () => {
  const [keyword, setKeyword] = useState(null);
  const [results, setResults] = useState(null);

  const handleKeywordSearch = (response) => {
    setResults(response.data.drinks);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    // Receiving information from the search bar into the URL below
    const urlCocktail = `https:www.thecocktaildb.com/api/json/v1/1/search.php?s=${keyword}`;
    axios.get(urlCocktail).then(handleKeywordSearch);
  };

  const cocktailSearch = (e) => {
    setKeyword(e.target.value);
    //Value of the search bar
  };

  return (
    <div className="More">
      <h2>More(... in progress) - Special thanks to TheCocktailDB</h2>
      <form onSubmit={handleSearch}>
        <input
          type="search"
          placeholder="Search for a drink"
          onChange={cocktailSearch}
        ></input>
        <button type="button" onClick={handleSearch}>
          <span role="img" aria-label="search">
            🔍
          </span>
        </button>
      </form>
      <MoreResults results={results} />
    </div>
  );
};

export default More;
