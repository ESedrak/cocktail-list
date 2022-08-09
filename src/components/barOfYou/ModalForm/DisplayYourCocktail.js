import "../../../Cocktail.css";

function DisplayYourCocktail({ cocktailInfo, addIngredient }) {
	return (
		<section className="Cocktail-you-one">
			<hr />
			{cocktailInfo.map((details, index) => (
				<div key={index}>
					<h3 className="Cocktail-drink-name">{details.drinkName}</h3>
					<div className="Cocktail-process">
						<ul className="Cocktail-ingredients" role="presentation">
							{addIngredient.length > 0 &&
								addIngredient[index].map((showIngredient, index) => (
									<li key={`${showIngredient} ${index}`}>
										{showIngredient.amount} {showIngredient.ingredient}
									</li>
								))}
						</ul>
						<p className="Cocktail-instructions">{details.process}</p>
					</div>
					<hr />
				</div>
			))}
		</section>
	);
}

export default DisplayYourCocktail;
