import { useState, useEffect } from "react";

function useCocktailApi() {
	const [results, setResults] = useState(null);
	const [keyword, setKeyword] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const [errorMsg, setErrorMsg] = useState("");

	// To have have a cocktail searched for the first time the page is loaded
	useEffect(() => {
		const initialCocktail = async () => {
			try {
				const defaultCocktail = await fetchCocktailApi("margarita");
				return defaultCocktail;
			} catch (error) {
				console.log(
					`This is for the defaultCocktailDB error: ${error.message}`
				);
			}
		};
		initialCocktail();
	}, []);

	// use async...await to return a promise
	const fetchCocktailApi = async (keyword) => {
		// documentation: https://www.thecocktaildb.com/api/json/v1/1/search.php?s="cocktail"&api_key=1
		const urlCocktail = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${keyword}&api_key=1`;

		// use try...catch to check if request fails when making API call
		try {
			setIsLoading(true);
			const response = await fetch(urlCocktail);
			if (response.ok) {
				const jsonResponse = await response.json();
				// console.log(jsonResponse);
				const data = setResults(jsonResponse.drinks);
				setIsLoading(false);
				return data;
			}
		} catch (error) {
			setIsLoading(false);
			console.log(`This is an error for the cocktailDBAPI: ${error.message}`);
			setErrorMsg(
				"Failed to connect to the cocktail experts! Check your internet and try again"
			);
		}
	};

	return {
		results,
		fetchCocktailApi,
		keyword,
		setKeyword,
		isLoading,
		errorMsg,
	};
}

export default useCocktailApi;
