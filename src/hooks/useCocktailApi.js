import { useState, useEffect } from "react";

export default function useCocktailApi() {
  const [initialised, setInialised] = useState(false);
  const [results, setResults] = useState(null);
  const [keyword, setKeyword] = useState();

  // For the first time page is loaded
  useEffect(() => {
    if (!initialised) {
      setInialised(true);
      fetchCocktailApi("french 75");
    }
  }, [results]);

  // documentation: https://www.thecocktaildb.com/api/json/v1/1/search.php?s="cocktail"&api_key=1
  function fetchCocktailApi(keyword) {
    const urlCocktail = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${keyword}&api_key=1`;

    fetch(urlCocktail)
      .then((response) => response.json())
      .then((data) => setResults(data.drinks));
  }

  return {
    results,
    fetchCocktailApi,
    keyword,
    setKeyword,
  };
}
