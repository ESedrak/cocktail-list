import Header from "../Header/Header";
import headerDetails from "../../library/headerDetails";
import ModalForm from "./ModalForm/ModalForm";
import DisplayYourCocktail from "../displayCocktails/DisplayYourCocktail";
import { useState } from "react";
import "./You.css";

function You() {
	// Modal Form only pops up when Add Cocktail button clicked - otherwise set to false
	const [modalForm, setModalForm] = useState(false);
	const [allIngredients, setAllIngredients] = useState([]);
	const [cocktailInfo, setCocktailInfo] = useState([]);

	// createCocktail receives the cocktail data when modal form submited
	const createCocktail = (drinkInfo, addIngredients) => {
		setCocktailInfo([...cocktailInfo, drinkInfo]);
		setAllIngredients([...allIngredients, addIngredients]);
	};

	// Deletes cocktails (remove data from both cocktailInfo and ingredients)
	const deleteCocktail = (index) => {
		let newCocktailsInfo = [...cocktailInfo];
		let newIngredients = [...allIngredients];

		newCocktailsInfo.splice(index, 1);
		setCocktailInfo(newCocktailsInfo);

		newIngredients.splice(index, 1);
		setAllIngredients(newIngredients);
	};

	return (
		<div className="You">
			<Header header={headerDetails.barOf.you} />
			<button className="You-button" onClick={() => setModalForm(true)}>
				Add Cocktail
			</button>
			<ModalForm
				modalForm={modalForm}
				onClose={() => setModalForm(false)}
				createCocktail={createCocktail}
			/>
			<DisplayYourCocktail
				cocktailInfo={cocktailInfo}
				allIngredients={allIngredients}
				deleteCocktail={deleteCocktail}
			/>
		</div>
	);
}

export default You;
