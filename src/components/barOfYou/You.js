import Header from "../Header/Header";
import headerDetails from "../../library/headerDetails";
import ModalForm from "./ModalForm/ModalForm";
import DisplayYourCocktail from "../displayCocktails/DisplayYourCocktail";
import useYou from "../../hooks/useYou";
import "./You.css";

function You() {
	// Hooks from folder hooks/useYou
	const {
		modalForm,
		setModalForm,
		cocktailInfo,
		setCocktailInfo,
		allIngredients,
		setAllIngredients,
	} = useYou();

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
