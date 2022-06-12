import React from "react";
import CocktailDbResults from "./CocktailDbResults";
import "./CocktailDb.css";
import useCocktailApi from "../hooks/useCocktailApi";
import { faCoffee } from "@fortawesome/fontawesome-free-solid";

const CocktailDb = () => {
  // use own Hooks (inside folder hooks)
  const { results, fetchCocktailApi, keyword, setKeyword } = useCocktailApi();

  const handleSearch = (e) => {
    e.preventDefault();
    fetchCocktailApi(keyword);
  };

  const cocktailSearch = (e) => {
    //Value of the search bar
    setKeyword(e.target.value);
  };

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
          <FontAwesomeIcon icon={faCoffee} />
        </button>
      </form>
      <CocktailDbResults results={results} />
    </div>
  );
};

export default CocktailDb;
