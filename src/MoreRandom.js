import React from "react";
import axios from "axios";

const MoreRandom = () => {
  const handleRandomSearch = (response) => {
    console.log(response.data.drinks[0]);
  };

  const randomCocktail = (e) => {
    e.preventDefault();

    const randomUrl = "https://www.thecocktaildb.com/api/json/v1/1/random.php";

    axios.get(randomUrl).then(handleRandomSearch);
  };

  return (
    <div className="MoreRandom">
      <form onChange={randomCocktail}>
        <button className="MoreRandom Button" onClick={randomCocktail}>
          Random Cocktail! ...In progress
        </button>
      </form>
    </div>
  );
};

export default MoreRandom;
