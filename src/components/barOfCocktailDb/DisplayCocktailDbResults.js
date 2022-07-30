import showIngredients from "../../library/showIngredients";

function DisplayCocktailDbResults({ dbResults, errorMsg }) {
	if (dbResults) {
		return (
			<div className="CocktailDbResults">
				{dbResults.map((cocktail) => {
					const listIngredients = showIngredients(cocktail);
					// console.log(listIngredients);
					return (
						<section key={cocktail.idDrink} className="Cocktail-one">
							<img
								src={cocktail.strDrinkThumb}
								alt={cocktail.strDrink}
								className="Cocktail-image-drink"
							/>
							<div className="Cocktail-image-overlay">
								<h3 className="Cocktail-drink-name">{cocktail.strDrink}</h3>
								<div className="Cocktail-process">
									<ul className="Cocktail-ingredients" role="presentation">
										{listIngredients.map((oneIngredient, index) => {
											return (
												<li key={oneIngredient + index}>{oneIngredient}</li>
											);
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
		return <p className="errorMsg">{errorMsg || "No cocktails found"}</p>;
	}
}

export default DisplayCocktailDbResults;
