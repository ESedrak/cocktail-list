import React from "react";
import RandomData from "./RandomData";
import "./Random.css";
import useRandomApi from "../hooks/useRandomApi";
import Loader from "../loaderSpinner/Spinner";

const Random = () => {
  const { randomData, fetchRandomApi } = useRandomApi();

  const randomCocktail = (e) => {
    e.preventDefault();
    fetchRandomApi();
  };
  return (
    <div className="Random">
      <h2 className="Random-heading">Unsure?</h2>
      <form onChange={randomCocktail}>
        <button onClick={randomCocktail}>Random Cocktail</button>
        <RandomData randomData={randomData} />
      </form>
    </div>
  );
};

export default Random;
