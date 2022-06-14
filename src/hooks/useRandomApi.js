import { useState, useEffect } from "react";

export default function useRandomApi() {
  const [initialised, setInitialised] = useState(false);
  const [randomData, setRandomData] = useState({ ready: false });

  // Random cocktail generated on load
  useEffect(() => {
    if (!initialised) {
      setInitialised(true);
      fetchRandomApi();
    }
  }, []);

  // Grabbing the data that's needed from the API
  function handleRandomResponse(response) {
    const drinks = response.drinks[0];
    setRandomData({
      ready: true,
      name: drinks.strDrink,
      tags: drinks.strTags,
      category: drinks.strCategory,
      image: drinks.strDrinkThumb,
      id: drinks.idDrink,
      instructions: drinks.strInstructions,
      ingredient1: drinks.strIngredient1,
      ingredient2: drinks.strIngredient2,
      ingredient3: drinks.strIngredient3,
      ingredient4: drinks.strIngredient4,
      ingredient5: drinks.strIngredient5,
      ingredient6: drinks.strIngredient6,
      ingredient7: drinks.strIngredient7,
      ingredient8: drinks.strIngredient8,
      ingredient9: drinks.strIngredient9,
      ingredient10: drinks.strIngredient10,
      ingredient11: drinks.strIngredient11,
      measure1: drinks.strMeasure1,
      measure2: drinks.strMeasure2,
      measure3: drinks.strMeasure3,
      measure4: drinks.strMeasure4,
      measure5: drinks.strMeasure5,
      measure6: drinks.strMeasure6,
      measure7: drinks.strMeasure7,
      measure8: drinks.strMeasure8,
      measure9: drinks.strMeasure9,
      measure10: drinks.strMeasure10,
      measure11: drinks.strMeasure11,
      measure12: drinks.strMeasure12,
    });
  }

  function fetchRandomApi() {
    // URL below generates a random cocktail from the api list of  cocktaildb (over 650 cocktails)
    const randomUrl = "https://www.thecocktaildb.com/api/json/v1/1/random.php";

    // Use fetch instead of axios - as issues arose when axios and netlify (hosting platfor) are being used together
    fetch(randomUrl)
      .then((response) => response.json())
      .then(handleRandomResponse);
  }
  return { randomData, fetchRandomApi };
}
