import "./ModalForm.css";

function ModalForm({ modalForm, onClose }) {
	console.log(modalForm);
	if (!modalForm) {
		return null;
	}
	return (
		<div className="ModalForm">
			<div className="ModalForm-content">
				<h3 className="ModalForm-header">Add your cocktails!</h3>
				<div className="ModalForm-body">
					<input type="text" placeholder="Cocktail Name" />
					<div className="ModalForm-ingredients">
						<input type="text" placeholder="Ingredient Name" />
						<input type="text" placeholder="Ingredient Amount" />
						<button>Add More</button>
					</div>
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
