import "./ModalForm.css";

function DisplayYourCocktail({ cocktailInfo, addIngredient }) {
	return (
		<div className="DisplayYourCocktail">
			<hr />
			{cocktailInfo.map((details, index) => (
				<div key={index}>
					<p>{details.drinkName}</p>
					<ul role="presentation">
						{addIngredient.length > 0 &&
							addIngredient[index].map((showIngredient) => (
								<li>
									{showIngredient.ingredient} {showIngredient.amount}
								</li>
							))}
					</ul>
					<p>{details.process}</p>
					<hr />
				</div>
			))}
		</div>
	);
}

export default DisplayYourCocktail;
