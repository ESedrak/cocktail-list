import lizCocktailDetails from "../../library/lizCocktailDetails";
import DisplayLizCocktail from "../displayCocktails/DisplayLizCocktail";
import "./LizCocktails.css";

function LizCocktails() {
	return (
		<div className="DisplayLizCocktails">
			<h2 className="DisplayLizCocktails-header">Bar of Liz</h2>
			<p className="DisplayLiz-msg">
				The perfected ratios of some of the best cocktails
			</p>
			{lizCocktailDetails.map((lizDrinks, index) => {
				return <DisplayLizCocktail lizDrink={lizDrinks} key={index} />;
			})}
		</div>
	);
}

export default LizCocktails;
