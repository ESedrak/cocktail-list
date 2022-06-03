import { useState, useEffect } from "react";

export default function useCocktailApi() {
  const [initialised, setInialised] = useState(false);
  const [results, setResults] = useState(null);
  const [keyword, setKeyword] = useState();

  useEffect(() => {
    if (!initialised) {
      console.log(initialised);
      setInialised(true);
      fetchCocktailApi("margarita");
    }
  }, [results]);

  function fetchCocktailApi(keyword) {
    const urlCocktail = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${keyword}&api_key=1`;

    fetch(urlCocktail)
      .then((response) => response.json())
      .then((data) => setResults(data.drinks));
  }

  return { results, fetchCocktailApi, keyword, setKeyword };
}
