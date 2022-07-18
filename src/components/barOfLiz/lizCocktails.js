import lizCocktailDetails from "../../library/lizCocktailDetails";
import DisplayLizCocktails from "./DisplayLizCocktails";
import "./lizCocktails.css";

function LizCocktails() {
	return (
		<div className="DisplayLizCocktails">
			<h2 className="DisplayLizCocktails-header">Bar of Liz</h2>
			<p className="DisplayLiz-msg">
				The perfected ratios of some of the best cocktails
			</p>
			{lizCocktailDetails.map((lizDrinks, index) => {
				return <DisplayLizCocktails lizDrink={lizDrinks} key={index} />;
			})}
		</div>
	);
}

export default LizCocktails;
