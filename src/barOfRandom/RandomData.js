function RandomData(props) {
	// console.log(props.randomData) to get data from Random component
	const randomData = props.randomData;

	// Each drink can have up to 15 ingredients/measurements + some ingredients does not have a measurement(e.g. salt)
	const showRandomIngredients = (randomData) => {
		const allIngredients = [];
		for (let i = 1; i <= 15; i++) {
			const oneIngredient = randomData[`strIngredient${i}`];
			const oneMeasurement = randomData[`strMeasure${i}`];
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

	const showRandomList = showRandomIngredients(randomData);

	if (randomData) {
		return (
			<div className="RandomData">
				<section className="Cocktail-one">
					<img
						src={randomData.strDrinkThumb}
						alt={randomData.strDrink}
						className="Cocktail-image-drink"
						width="560px"
						height="560px"
					/>
					<div className="Cocktail-image-overlay">
						<h2 className="Cocktail-drink-name">{randomData.strDrink}</h2>
						<div className="Cocktail-process">
							<ul className="Cocktail-ingredients" role="presentation">
								{showRandomList.map((ingredients, index) => {
									return <li key={index}>{ingredients}</li>;
								})}
							</ul>
							<div className="Cocktail-instructions">
								{randomData.strInstructions}
							</div>
						</div>
					</div>
				</section>
			</div>
		);
	}
}

export default RandomData;
