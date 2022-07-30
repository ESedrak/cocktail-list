const showIngredients = (cocktail) => {
	// console.log(cocktail);
	const allIngredients = [];

	// Each drink can have up to 15 ingredients/measurements + some ingredients does not have a measurement(e.g. salt)
	for (let i = 1; i <= 15; i++) {
		const oneIngredient = cocktail[`strIngredient${i}`];
		const oneMeasurement = cocktail[`strMeasure${i}`];
		if (oneIngredient) {
			if (oneMeasurement) {
				allIngredients.push(
					`${oneMeasurement.trim()} - ${oneIngredient.trim()}`
				);
			} else {
				allIngredients.push(oneIngredient);
			}
		}
	}
	// console.log(allIngredients);
	return allIngredients;
};

export default showIngredients;
