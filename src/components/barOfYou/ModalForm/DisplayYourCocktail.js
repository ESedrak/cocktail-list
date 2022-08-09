import "./ModalForm.css";

function DisplayYourCocktail({ cocktailInfo, addIngredient }) {
	let results = [cocktailInfo, addIngredient];
	// console.log(cocktailInfo);
	console.log(addIngredient);
	// console.log(results);

	return (
		<div className="DisplayYourCocktail">
			{/* {results.map((cocktail, index) => ({ cocktail }))} */}
			<hr />
			{cocktailInfo.map((details, index) => (
				<div key={index}>
					<p>{details.drinkName}</p>
					<p>{details.process}</p>
					{addIngredient.length > 0 &&
						addIngredient[index].map((showIngredient, index) => (
							<div>
								{showIngredient.ingredient}
								{showIngredient.amount}
							</div>
						))}
					<hr />
					{/* <ul>
						{addIngredient.map((showIngredient, index) => (
							{showIngredient.map((oneIngredient, index)=> (
                                <li>{oneIngredient.ingredient}</li>
                            ))}
						))}
					</ul> */}
				</div>
			))}
			{/* /* {addIngredient.length > 0 &&
				addIngredient.map(
					(showIngredient, index) =>
						showIngredient.map((oneIngredient) => oneIngredient.ingredient)

					// <ul>
					// 	<li>
					// 		{showIngredient.ingredient} {showIngredient.amount}
					// 	</li>
					// </ul>

					// showIngredient.length > 0 &&
					// 	showIngredient.map((oneIngredient) => (
					// 		<ul>
					// 			<li>
					// 				{oneIngredient.ingredient} {oneIngredient.amount}
					// 			</li>
					// 		</ul>
					// 	));
				)}  */}
			<hr />
			<br />
		</div>
	);
}

export default DisplayYourCocktail;

// showIngredient.map((oneIngredient, index) => (
//     <ul key={index}>
//         {oneIngredient && (
//             <li>
//                 {oneIngredient.ingredient} {oneIngredient.amount}
//             </li>
//         )}
//     </ul>
// ))

// <ul key={index}>
//     {showIngredient && (
//         <li>
//             {showIngredient.ingredient} {showIngredient.amount}
//         </li>
//     )}
// </ul>
