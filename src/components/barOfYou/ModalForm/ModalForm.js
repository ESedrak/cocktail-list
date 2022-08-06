import "./ModalForm.css";
import { useState } from "react";

function ModalForm({ modalForm, onClose }) {
	const [ingredientList, setIngredientList] = useState([
		{
			ingredient: "",
			amount: "",
		},
	]);

	// console.log(ingredientList);

	// To open/close modal form
	if (!modalForm) {
		return null;
	}

	const handleIngredientAdd = () => {
		setIngredientList([...ingredientList, { ingredient: "", amount: "" }]);
	};

	const handleIngredientRemove = (index) => {
		const removeIngredient = [...ingredientList];
		removeIngredient.splice(index, 1);
		setIngredientList(removeIngredient);
	};

	const handleIngredientChange = (e, index) => {
		// const { name, value } = e.target;
		// console.log(e.target, index);
		const inputTarget = e.target.id;
		const valueTarget = e.target.value;
		console.log(inputTarget);
		console.log(valueTarget);

		const list = [...ingredientList];
		list[index][inputTarget] = valueTarget;
		setIngredientList(list);
		// const ingredients = [...ingredientList.ingredient];
		// ingredients[index][ingredient] = value;
		// setIngredientList({
		// 	...ingredientList,
		// 	[inputTarget][index]: valueTarget,
		// });
	};

	// // const { name, value } = e.target;
	// 	// console.log(e.target, index);
	// 	const inputTarget = e.target.id;
	// 	const inputValue = e.target.value;
	// 	console.log(inputTarget);
	// 	console.log(inputValue);
	// 	console.log(index);
	// 	// let newIngredients = [...ingredientList];
	// 	// // console.log(ingredient[index][inputTarget]);
	// 	// newIngredients[index][ingredient] = value;
	// 	// setIngredientList({
	// 	// 	...ingredientList,
	// 	// 	[inputTarget]: inputValue,
	// 	// });

	return (
		<div className="ModalForm">
			<div className="ModalForm-content">
				<h3 className="ModalForm-header">Add your cocktails!</h3>
				<div className="ModalForm-body">
					<input type="text" placeholder="Cocktail Name" />
					{ingredientList.map((oneIngredient, index) => (
						<div className="ModalForm-ingredients" key={index}>
							<input
								name="ingredient"
								className="ingredient"
								key={index}
								id="ingredient"
								type="text"
								placeholder="Ingredient Name"
								value={oneIngredient.ingredient}
								onChange={(e) => handleIngredientChange(e, index)}
							/>
							<input
								type="text"
								name="amount"
								id="amount"
								placeholder="Ingredient Amount"
								value={oneIngredient.amount}
								onChange={(e) => handleIngredientChange(e, index)}
							/>
							{/* If only 1 ingredient input field - remove the delete button */}
							{ingredientList.length > 1 && (
								<button onClick={() => handleIngredientRemove(index)}>X</button>
							)}

							{/* Only allow up to 15 ingredients */}
							{ingredientList.length - 1 === index &&
								ingredientList.length < 10 && (
									<button onClick={handleIngredientAdd}>Add More</button>
								)}
						</div>
					))}
					<input type="text-area" placeholder="Description"></input>
				</div>
				<div className="ModalForm-Footer">
					<div className="Modal-footer">
						<button>Add Cocktail</button>
						<button
							onClick={onClose}
							type="button"
							className="ModalForm-button"
						>
							Close
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ModalForm;

{
	/* <div className="Modal-Header">
<h4 className="Modal-title">Add your cocktail</h4>
</div>
<form onSubmit={handleSubmit}>
<div className="Modal-body">
	<input
		id="drinkName"
		placeholder="Name of Drink"
		onChange={handleChange}
		value={addDrink.drinkName}
	/>
	<input
		id="ingredient1"
		placeholder="Ingredient 1"
		onChange={handleChange}
		value={addDrink.ingredient1}
	/>
	<input
		id="measure1"
		placeholder="Measurement 1"
		onChange={handleChange}
		type="number"
		value={addDrink.measure1}
	/>
	<input
		id="process"
		placeholder="Process"
		onChange={handleChange}
		value={addDrink.process}
	/>
</div>
<div className="Modal-footer">
	<button>Add Cocktail</button>
	<button type="button" className="Modal-button" onClick={onClose}>
		Close
	</button>
</div>
</form> */
}
