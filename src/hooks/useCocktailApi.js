import { useState, useEffect } from "react";

export default function useCocktailApi(keyword = "margarita") {
  const [results, setResults] = useState(null);
  useEffect(() => {
    fetchCocktailApi(keyword);
  });

  function fetchCocktailApi(keyword) {
    const urlCocktail = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${keyword}&api_key=1`;
    console.log("Slight different message for a search for keyword");

    fetch(urlCocktail)
      .then((response) => response.json())
      .then((data) => setResults(data.drinks));
  }

  return { results, fetchCocktailApi };
}
