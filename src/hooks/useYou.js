import { useState, useEffect } from "react";

function useYou() {
	// Local storage for each cocktail info and cocktail ingredients
	const cacheCocktails = localStorage.getItem("stored-cocktails");
	const cacheIngredients = localStorage.getItem("stored-ingredients");
	const starterCocktail = cacheCocktails ? JSON.parse(cacheCocktails) : [];
	const starterIngredients = cacheIngredients
		? JSON.parse(cacheIngredients)
		: [];
	// Modal Form only pops up when Add Cocktail button clicked - otherwise set to false
	const [modalForm, setModalForm] = useState(false);
	const [cocktailInfo, setCocktailInfo] = useState(starterCocktail);
	const [allIngredients, setAllIngredients] = useState(starterIngredients);

	useEffect(() => {
		localStorage.setItem("stored-cocktails", JSON.stringify(cocktailInfo));
		localStorage.setItem("stored-ingredients", JSON.stringify(allIngredients));
	}, [cocktailInfo]);

	return {
		modalForm,
		setModalForm,
		cocktailInfo,
		setCocktailInfo,
		allIngredients,
		setAllIngredients,
	};
}

export default useYou;
