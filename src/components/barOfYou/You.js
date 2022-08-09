import Header from "../Header/Header";
import headerDetails from "../../library/headerDetails";
import ModalForm from "./ModalForm/ModalForm";
import DisplayYourCocktail from "../displayCocktails/DisplayYourCocktail";
import { useEffect, useState } from "react";
import "./You.css";

function You() {
	// Local storage for each cocktail info and cocktail ingredients
	const cacheCocktails = localStorage.getItem("stored-cocktails");
	const cacheIngredients = localStorage.getItem("stored-ingredients");
	const starterCocktail = cacheCocktails ? JSON.parse(cacheCocktails) : [];
	const starterIngredients = cacheIngredients
		? JSON.parse(cacheIngredients)
		: [];
	// Modal Form only pops up when Add Cocktail button clicked - otherwise set to false
	const [modalForm, setModalForm] = useState(false);
	const [cocktailInfo, setCocktailInfo] = useState(starterCocktail);
	const [allIngredients, setAllIngredients] = useState(starterIngredients);

	useEffect(() => {
		localStorage.setItem("stored-cocktails", JSON.stringify(cocktailInfo));
		localStorage.setItem("stored-ingredients", JSON.stringify(allIngredients));
	}, [cocktailInfo]);

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
