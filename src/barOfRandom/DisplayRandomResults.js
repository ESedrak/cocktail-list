function DisplayRandomResults({ randomResults, errorMsg }) {
	// console.log(props.randomResults) to get data from Random component

	// Each drink can have up to 15 ingredients/measurements + some ingredients does not have a measurement(e.g. salt)
	const showRandomIngredients = (randomResults) => {
		const allIngredients = [];
		for (let i = 1; i <= 15; i++) {
			const oneIngredient = randomResults[`strIngredient${i}`];
			const oneMeasurement = randomResults[`strMeasure${i}`];
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

	const showRandomList = showRandomIngredients(randomResults);

	if (randomResults.strDrink) {
		return (
			<section className="Cocktail-one">
				<img
					src={randomResults.strDrinkThumb}
					alt={randomResults.strDrink}
					className="Cocktail-image-drink"
				/>
				<div className="Cocktail-image-overlay">
					<h3 className="Cocktail-drink-name">{randomResults.strDrink}</h3>
					<div className="Cocktail-process">
						<ul className="Cocktail-ingredients" role="presentation">
							{showRandomList.map((ingredients, index) => {
								return <li key={ingredients + index}>{ingredients}</li>;
							})}
						</ul>
						<div className="Cocktail-instructions">
							{randomResults.strInstructions}
						</div>
					</div>
				</div>
			</section>
		);
	} else {
		return <p className="errorMsg">{errorMsg}</p>;
	}
}

export default DisplayRandomResults;
