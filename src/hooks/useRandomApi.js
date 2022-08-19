import { useState, useEffect } from "react";

function useRandomApi() {
	const [randomResults, setRandomResults] = useState(null);
	const [isLoading, setIsLoading] = useState(false);
	const [errorMsg, setErrorMsg] = useState("");

	// Random cocktail generated on load
	useEffect(() => {
		const initialRandomCocktail = async () => {
			try {
				const rndmCktl = await fetchRandomApi();
				return rndmCktl;
			} catch (error) {
				console.log(
					`This is an error for the initialRandomCocktail: ${error.message}`
				);
			}
		};
		initialRandomCocktail();
	}, []);

	const fetchRandomApi = async () => {
		// URL generates a random cocktail from the api list of  cocktaildb (over 650 cocktails)
		const randomUrl = "https://www.thecocktaildb.com/api/json/v1/1/random.php";

		try {
			setIsLoading(true);
			const response = await fetch(randomUrl);
			if (response.ok) {
				const jsonResponse = await response.json();
				// console.log(jsonResponse.drinks[0]);
				const data = setRandomResults(jsonResponse.drinks);
				setIsLoading(false);
				return data;
			}
		} catch (error) {
			setIsLoading(false);
			console.log(`This is an error for the randomAPI: ${error.message}`);
			setErrorMsg(
				"Failed to connect to the cocktail experts! Check your internet and try again"
			);
		}
	};

	return { randomResults, fetchRandomApi, errorMsg, isLoading };
}

export default useRandomApi;
