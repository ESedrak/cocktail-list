import lizCocktails from "./lizCocktails";
import "./displayLizCocktails.css";

function DisplayLizCocktails() {
	return (
		<div className="DisplayLizCocktails">
			<h2 className="DisplayLizCocktails-header">Bar of Liz</h2>
			<p className="DisplayLiz-msg">
				The perfected ratios of some of the best cocktails
			</p>
			{lizCocktails.map((myDrinks, index) => {
				return (
					<section
						className="Cocktail-one"
						key={`${myDrinks.drinkName}-${index}`}
					>
						<img
							className="Cocktail-image-drink"
							src={myDrinks.image}
							alt={myDrinks.drinkName}
						/>
						<div className="Cocktail-image-overlay">
							<h3 className="Cocktail-drink-name">{myDrinks.drinkName}</h3>
							<div className="Cocktail-process">
								<ul className="Cocktail-ingredients" role="presentation">
									{myDrinks.ingredients.map((ingredient, index) => (
										<li key={`${ingredient}-${index}`}>
											{ingredient.amount}
											{ingredient.unit} {ingredient.ingredient}
										</li>
									))}
								</ul>

								<p className="Cocktail-instructions">{myDrinks.process}</p>
							</div>
						</div>
					</section>
				);
			})}
		</div>
	);
}

export default DisplayLizCocktails;
