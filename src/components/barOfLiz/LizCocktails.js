import lizCocktailDetails from "../../library/lizCocktailDetails";
import DisplayLizCocktail from "../displayCocktails/DisplayLizCocktail";
import Header from "../Header/Header";
import headerDetails from "../../library/headerDetails";

function LizCocktails() {
	return (
		<div className="DisplayLizCocktails">
			<Header header={headerDetails.barOf.liz} />
			{lizCocktailDetails.map((lizDrinks, index) => {
				return <DisplayLizCocktail lizDrink={lizDrinks} key={index} />;
			})}
		</div>
	);
}

export default LizCocktails;
