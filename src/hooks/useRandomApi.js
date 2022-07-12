import { useState, useEffect } from "react";

function useRandomApi() {
	const [initialised, setInitialised] = useState(false);
	const [randomData, setRandomData] = useState({});
	const [isLoading, setIsLoading] = useState(true);

	// Random cocktail generated on load
	useEffect(() => {
		const initialRandomCocktail = async () => {
			try {
				if (!initialised) {
					setInitialised(true);
					const rndmCktl = await fetchRandomApi();
          console.log(rndmCktl)
					setIsLoading(false);
					return rndmCktl;
				}
			} catch (error) {
				console.log(`This is an error for the initialRandomCocktail: ${error.message}`);
			}
		} 
    initialRandomCocktail();
	}, []);

	const fetchRandomApi = async () => {
		// URL below generates a random cocktail from the api list of  cocktaildb (over 650 cocktails)
		const randomUrl = "https://www.thecocktaildb.com/api/json/v1/1/random.php";

		try {
      setIsLoading(true)
			const response = await fetch(randomUrl);
			if (response.ok) {
				const jsonResponse = await response.json();
				console.log(jsonResponse.drinks[0]);
				const data = setRandomData(jsonResponse.drinks[0]);
        setIsLoading(false);
				return data;
			}
		} catch (error) {
			console.log(`This is an error for the randomAPI: ${error.message}`);
		}
	};

	return { isLoading, randomData, fetchRandomApi };
}

export default useRandomApi;
