import Header from "../Header/Header";
import headerDetails from "../../library/headerDetails";
import ModalForm from "./ModalForm/ModalForm";
import DisplayYourCocktail from "./ModalForm/DisplayYourCocktail";
import { useState } from "react";
import "./You.css";

function You() {
	// Modal Form only pops up when clicked - otherwise set to false
	const [modalForm, setModalForm] = useState(false);
	const [addIngredient, setAddIngredient] = useState([]);
	const [cocktailInfo, setCocktailInfo] = useState([]);

	const createCocktail = (drinkInfo, addIngredients) => {
		setCocktailInfo([...cocktailInfo, drinkInfo]);
		setAddIngredient([...addIngredient, addIngredients]);
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
				addIngredient={addIngredient}
			/>
		</div>
	);
}

export default You;
