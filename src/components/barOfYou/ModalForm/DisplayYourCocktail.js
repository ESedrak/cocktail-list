function DisplayYourCocktail({ cocktailInfo, addIngredient }) {
	console.log(cocktailInfo);
	console.log(addIngredient);
	return (
		<div>
			{cocktailInfo.map((details, index) => {
				return (
					<div key={index}>
						<p>{details.drinkName}</p>
						<p>{details.process}</p>
					</div>
				);
			})}
		</div>
	);
}

export default DisplayYourCocktail;
