function CocktailDbResults(props) {
	//  console.log(props.results) to see data passed through from component CocktailDb

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
		return allIngredients;
	};

	if (props.results) {
		return (
			<div className="CocktailDbResults">
				{props.results.map((cocktail) => {
					const listIngredients = showIngredients(cocktail);
					// console.log(listIngredients);
					return (
						<section key={cocktail.idDrink} className="Cocktail-one">
							<img
								src={cocktail.strDrinkThumb}
								alt={cocktail.strDrink}
								className="Cocktail-image-drink"
								width="560px"
								height="560px"
							/>
							<div className="Cocktail-image-overlay">
								<h2 className="Cocktail-drink-name">{cocktail.strDrink}</h2>
								<div className="Cocktail-process">
									<ul className="Cocktail-ingredients" role="presentation">
										{listIngredients.map((oneIngredient, index) => {
											return <li key={index}>{oneIngredient}</li>;
										})}
									</ul>
									<p className="Cocktail-instructions">
										{cocktail.strInstructions}
									</p>
								</div>
							</div>
						</section>
					);
				})}
			</div>
		);
	} else {
		return (
			<div>
				<p>No cocktails found</p>
				<p>Please try again</p>
			</div>
		);
	}
}

export default CocktailDbResults;
