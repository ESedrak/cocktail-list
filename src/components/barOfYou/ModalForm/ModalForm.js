import "./ModalForm.css";
import { useState } from "react";

function ModalForm({ modalForm, onClose }) {
	const [ingredientList, setIngredientList] = useState([
		{
			ingredient: "",
			amount: "",
		},
	]);

	console.log(ingredientList);

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
		const inputTarget = e.target.id;
		const valueTarget = e.target.value;
		// console.log(inputTarget);
		// console.log(valueTarget);

		const list = [...ingredientList];
		// console.log(list[index][inputTarget]);
		list[index][inputTarget] = valueTarget;
		setIngredientList(list);
	};

	return (
		<div className="ModalForm">
			<div className="ModalForm-content">
				<h3 className="ModalForm-header">Add your cocktails!</h3>
				<div className="ModalForm-body">
					<input type="text" placeholder="Cocktail Name" />
					{/* Show the input values that is given */}
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

							{/* Only allow up to 10 ingredients */}
							{ingredientList.length - 1 === index &&
								ingredientList.length < 10 && (
									<button onClick={handleIngredientAdd}>Add More</button>
								)}
						</div>
					))}
					{/* <div className="ModalForm-show-ingredients">
						{ingredientList.map((showIngredient, index) => (
							<ul key={index}>
								{showIngredient && (
									<li>
										{showIngredient.ingredient} {showIngredient.amount}
									</li>
								)}
							</ul>
						))}
					</div> */}
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
