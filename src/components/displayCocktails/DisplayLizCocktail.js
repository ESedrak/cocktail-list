function DisplayLizCocktail({ lizDrink }) {
	return (
		<section className="Cocktail-one">
			<img
				className="Cocktail-image-drink"
				src={lizDrink.image}
				alt={lizDrink.drinkName}
			/>
			<div className="Cocktail-image-overlay">
				<h3 className="Cocktail-drink-name">{lizDrink.drinkName}</h3>
				<div className="Cocktail-process">
					<ul className="Cocktail-ingredients" role="presentation">
						{lizDrink.ingredients.map((ingredient, index) => (
							<li key={`${ingredient}-${index}`}>
								{ingredient.amount}
								{ingredient.unit} {ingredient.ingredient}
							</li>
						))}
					</ul>

					<p className="Cocktail-instructions">{lizDrink.process}</p>
				</div>
			</div>
		</section>
	);
}

export default DisplayLizCocktail;
