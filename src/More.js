import React, { useState } from "react";

const More = () => {
  const [keyword, setKeyword] = useState(null);

  const handleSearch = (e) => {
    e.preventDefault();
    // Receiving information from the search bar into the URL below
    const urlCocktail = `www.thecocktaildb.com/api/json/v1/1/search.php?s=${keyword}`;
    console.log(urlCocktail);
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
          🔍
        </button>
      </form>
    </div>
  );
};

export default More;
