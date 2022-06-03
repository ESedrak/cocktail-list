import React, { useState } from "react";
import CocktailDbResults from "./CocktailDbResults";
import "./CocktailDb.css";
import searchIcon from "../images/search.jpg";
import useCocktailApi from "./hooks/useCocktailApi";

const CocktailDb = (props) => {
  // const [keyword, setKeyword] = useState(props.defaultDrink); // keyword is set to default  "Margarita"
  // const [results, setResults] = useState(null);
  // const [loaded, setLoaded] = useState(false); // Keep track of the first time page is being loaded (set to false to render default "margarita")
  const { results, fetchCocktailApi, keyword, setKeyword } = useCocktailApi();

  const handleSearch = (e) => {
    e.preventDefault();
    fetchCocktailApi(keyword);
  };

  const cocktailSearch = (e) => {
    //Value of the search bar
    setKeyword(e.target.value);
  };

  // const initialLoad = () => {
  //   // function purpose is to change state to true so loaded will be rendered
  //   setLoaded(true);
  //   fetchCocktailApi();
  // };

  // if (loaded) {
  //   return (
  //     <div className="CocktailDb">
  //       <h2 className="CocktailDb-heading">Bar TheCocktailDB</h2>
  //       <form onSubmit={handleSearch}>
  //         <input
  //           type="search"
  //           placeholder="Search for a Drink or Spirit"
  //           onChange={cocktailSearch}
  //           className="CocktailDb-searchbar"
  //         ></input>
  //         <button
  //           type="button"
  //           onClick={handleSearch}
  //           className="CocktailDb-button"
  //         >
  //           <img src={searchIcon} alt="search" width="25em" />
  //         </button>
  //       </form>
  //       <CocktailDbResults results={results} />
  //     </div>
  //   );
  // } else {
  //   initialLoad();
  //   return "Loading";
  // }
};

export default CocktailDb;
