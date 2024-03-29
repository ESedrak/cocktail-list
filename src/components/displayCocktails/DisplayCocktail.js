import displayIngredients from "../../util/displayIngredients";

function DisplayCocktail({ results, errorMsg }) {
	return (
		<div>
			{results.length ? (
				<div className="DisplayCocktail">
					{results.map((cocktail) => {
						const listIngredients = displayIngredients(cocktail);
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
											{listIngredients.map((oneIngredient, index) => (
												<li key={oneIngredient + index}>{oneIngredient}</li>
											))}
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
			) : (
				<p className="errorMsg">{errorMsg || "No cocktails found"}</p>
			)}
		</div>
	);
}

export default DisplayCocktail;
