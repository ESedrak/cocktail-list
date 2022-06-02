import React, { useState } from "react";
import CocktailDbResults from "./CocktailDbResults";
import "./CocktailDb.css";
import searchIcon from "../images/search.jpg";

const CocktailDb = (props) => {
  const [keyword, setKeyword] = useState(props.defaultDrink); // keyword is set to default  "Margarita"
  const [results, setResults] = useState(null);
  const [loaded, setLoaded] = useState(false); // Keep track of the first time page is being loaded (set to false to render default "margarita")

  const fetchCocktail = () => {
    // Goal of this function is to take care of the API: www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita
    const urlCocktail = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${keyword}&api_key=1`;

    // Using fetch instead of axios - as issues have arisen when using axios with netlify(hosting server)
    fetch(urlCocktail)
      .then((response) => response.json())
      .then((data) => setResults(data.drinks));
  };

  const handleSearch = (e) => {
    e.preventDefault();
    fetchCocktail();
  };

  const cocktailSearch = (e) => {
    //Value of the search bar
    setKeyword(e.target.value);
  };

  const initialLoad = () => {
    // function purpose is to change state to true so loaded will be rendered
    setLoaded(true);
    fetchCocktail();
  };

  if (loaded) {
    return (
      <div className="CocktailDb">
        <h2 className="CocktailDb-heading">Bar TheCocktailDB</h2>
        <form onSubmit={handleSearch}>
          <input
            type="search"
            placeholder="Search for a Drink or Spirit"
            onChange={cocktailSearch}
            className="CocktailDb-searchbar"
          ></input>
          <button
            type="button"
            onClick={handleSearch}
            className="CocktailDb-button"
          >
            <img src={searchIcon} alt="search" width="25em" />
          </button>
        </form>
        <CocktailDbResults results={results} />
      </div>
    );
  } else {
    initialLoad();
    return "Loading";
  }
};

export default CocktailDb;
