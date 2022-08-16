import { useState } from "react";
function useModalForm() {
	// For handling cocktail information (minus ingredient list)
	const [drinkInfo, setDrinkInfo] = useState({
		drinkName: "",
		process: "",
	});

	// For handling ingredients
	const [ingredientList, setIngredientList] = useState([
		{
			ingredient: "",
			amount: "",
		},
	]);

	return {
		drinkInfo,
		setDrinkInfo,
		ingredientList,
		setIngredientList,
	};
}

export default useModalForm;
