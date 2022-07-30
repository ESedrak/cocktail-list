import showIngredients from "../../library/showIngredients";

function DisplayRandomResults({ randomResults, errorMsg }) {
	const showRandomList = showIngredients(randomResults);

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
