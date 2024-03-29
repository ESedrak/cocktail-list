import "../barOfYou/You.css";

function DisplayYourCocktail({ cocktailInfo, allIngredients, deleteCocktail }) {
	return (
		<section className="DisplayYourCocktail">
			{cocktailInfo.map((details, index) => (
				<div key={`${details} - ${index}`} className="DisplayOneCocktail">
					<div>
						<h3 className="Cocktail-drink-name">{details.drinkName}</h3>
						<div className="Cocktail-process">
							<ul className="Cocktail-ingredients" role="presentation">
								{allIngredients.length > 0 &&
									allIngredients[index]?.map((showIngredient, index) => (
										<li key={`${showIngredient} - ${index}`}>
											{showIngredient.amount} - {showIngredient.ingredient}
										</li>
									))}
							</ul>
							<p className="Cocktail-instructions">{details.process}</p>
						</div>
						<button onClick={() => deleteCocktail(index)}>Delete</button>
					</div>
				</div>
			))}
		</section>
	);
}

export default DisplayYourCocktail;
