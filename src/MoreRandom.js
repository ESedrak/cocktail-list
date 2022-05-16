import React, { useState } from "react";
import MoreRandomData from "./MoreRandomData";

const MoreRandom = () => {
  const [randomData, setRandomData] = useState({});

  const handleRandomResponse = (response) => {
    setRandomData({
      name: response.drinks[0].strDrink,
      tags: response.drinks[0].strTags,
      category: response.drinks[0].strCategory,
      image: response.drinks[0].strImageSource,
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
    console.log(response.drinks);
  };

  const randomCocktail = (e) => {
    e.preventDefault();

    const randomUrl = "https://www.thecocktaildb.com/api/json/v1/1/random.php";

    // axios.get(randomUrl).then(handleRandomSearch);
    fetch(randomUrl)
      .then((response) => response.json())
      .then(handleRandomResponse);
  };

  return (
    <div className="MoreRandom">
      <form onChange={randomCocktail}>
        <button className="MoreRandom Button" onClick={randomCocktail}>
          Random Cocktail! ...In progress
        </button>
        <MoreRandomData randomData={randomData} />
      </form>
    </div>
  );
};

export default MoreRandom;
