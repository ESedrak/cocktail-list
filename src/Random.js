import React, { useState } from "react";
import RandomData from "./RandomData";

const Random = () => {
  const [randomData, setRandomData] = useState({});

  const handleRandomResponse = (response) => {
    setRandomData({
      name: response.drinks[0].strDrink,
      tags: response.drinks[0].strTags,
      category: response.drinks[0].strCategory,
      image: response.drinks[0].strDrinkThumb,
      id: response.drinks[0].idDrink,
      instructions: response.drinks[0].strInstructions,
      ingredient1: response.drinks[0].strIngredient1,
      ingredient2: response.drinks[0].strIngredient2,
      ingredient3: response.drinks[0].strIngredient3,
      ingredient4: response.drinks[0].strIngredient4,
      ingredient5: response.drinks[0].strIngredient5,
      ingredient6: response.drinks[0].strIngredient6,
      ingredient7: response.drinks[0].strIngredient7,
      ingredient8: response.drinks[0].strIngredient8,
      ingredient9: response.drinks[0].strIngredient9,
      measure1: response.drinks[0].strMeasure1,
      measure2: response.drinks[0].strMeasure2,
      measure3: response.drinks[0].strMeasure3,
      measure4: response.drinks[0].strMeasure4,
      measure5: response.drinks[0].strMeasure5,
      measure6: response.drinks[0].strMeasure6,
      measure7: response.drinks[0].strMeasure7,
      measure8: response.drinks[0].strMeasure8,
      measure9: response.drinks[0].strMeasure9,
    });
  };

  const randomCocktail = (e) => {
    e.preventDefault();

    const randomUrl = "https://www.thecocktaildb.com/api/json/v1/1/random.php";

    fetch(randomUrl)
      .then((response) => response.json())
      .then(handleRandomResponse);
  };

  return (
    <div className="Random">
      <h2>Unsure?</h2>
      <h3>Let fate decide</h3>
      <form onChange={randomCocktail}>
        <button className="Random Button" onClick={randomCocktail}>
          Random Cocktail!
        </button>
        <RandomData randomData={randomData} />
      </form>
    </div>
  );
};

export default Random;
