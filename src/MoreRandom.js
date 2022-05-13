import React from "react";

const MoreRandom = () => {
  const randomCocktail = (e) => {
    e.preventDefault();

    const randomUrl = "www.thecocktaildb.com/api/json/v1/1/random.php";

    fetch(randomUrl)
      .then((response) => response.json())
      .then((data) => data.drinks);
  };

  return (
    <div className="MoreRandom">
      <form onChange={randomCocktail}>
        <button className="MoreRandom Button" onChange={randomCocktail}>
          Random Cocktail! ...In progress
        </button>
      </form>
    </div>
  );
};

export default MoreRandom;
