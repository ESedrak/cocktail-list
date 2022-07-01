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

  // use async...await to return a promise
  const fetchCocktailApi = async (keyword) => {
    // documentation: https://www.thecocktaildb.com/api/json/v1/1/search.php?s="cocktail"&api_key=1
    const urlCocktail = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${keyword}&api_key=1`;

    // use try...catch to check if request fails when making API call
    try {
      const response = await fetch(urlCocktail);
      if (response.ok) {
        const jsonResponse = await response.json();
        // console.log(jsonResponse);
        const data = setResults(jsonResponse.drinks);
        return data;
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return {
    results,
    fetchCocktailApi,
    keyword,
    setKeyword,
  };
}
