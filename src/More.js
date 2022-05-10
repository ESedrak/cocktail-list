import React, { useState } from "react";
// import axios from "axios";
import MoreResults from "./MoreResults";

const More = () => {
  const [keyword, setKeyword] = useState(null);
  const [results, setResults] = useState(null);

  // const handleKeywordSearch = (response) => {
  //   setResults(response.data.drinks);
  // };

  const handleSearch = (e) => {
    e.preventDefault();
    // Receiving keyword from the search bar to complete URL
    const requestInfo = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        mode: "cors",
      },
    };
    const urlCocktail =
      "https:www.thecocktaildb.com/api/json/v1/1/search.php?s=gin";
    // axios.get(urlCocktail).then(handleKeywordSearch);
    fetch(urlCocktail)
      .then((response) => response.json())
      .then((data) => setResults(data.drinks));
  };

  const cocktailSearch = (e) => {
    setKeyword(e.target.value);
    //Value of the search bar
  };

  return (
    <div className="More">
      <h2>
        More(... in progress) - Special thanks to TheCocktailDB. Testing first.
        Testing testing. Testing Testing Testing.
      </h2>
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
