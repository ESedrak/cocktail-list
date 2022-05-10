import React, { useState } from "react";
import MoreResults from "./MoreResults";

const More = () => {
  const [keyword, setKeyword] = useState(null);
  const [results, setResults] = useState(null);

  const handleSearch = (e) => {
    e.preventDefault();

    const urlCocktail = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${keyword}&api_key=1`;

    fetch(urlCocktail)
      .then((response) => response.json())
      .then((data) => setResults(data.drinks));
  };

  const cocktailSearch = (e) => {
    //Value of the search bar
    setKeyword(e.target.value);
  };

  return (
    <div className="More">
      <h2>More(... in progress) - Special thanks to TheCocktailDB.</h2>
      <form onSubmit={handleSearch}>
        <input
          type="search"
          placeholder="Search for a Drink or Spirit"
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
