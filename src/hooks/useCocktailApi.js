import { useState, useEffect } from "react";

function useCocktailApi() {
  const [initialised, setInitalised] = useState(false);
  const [results, setResults] = useState(null);
  const [keyword, setKeyword] = useState();
  const [isLoading, setIsLoading] = useState(true);

  // To have have a cocktail searched for the first time the page is loaded 
  useEffect(() => {
    const initialCocktail = async()=>{
        try {
          if (!initialised){
            setInitalised(true)
            const defaultCocktail = await fetchCocktailApi("margarita");
            setIsLoading(false);
            return defaultCocktail
          }
        } catch(error) {
          console.log(`This is for the defaultCocktailDB error: ${error.message}`)
        }

      }
     initialCocktail()
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
        setIsLoading(false)
        return data;
      }
    } catch (error) {
      console.log(`This is an error for the cocktailDBAPI: ${error.message});
    }
  };

  return {
    isLoading,
    results,
    fetchCocktailApi,
    keyword,
    setKeyword,
  };
}

export default useCocktailApi;
