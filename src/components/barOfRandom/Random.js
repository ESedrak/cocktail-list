import "./Random.css";
import useRandomApi from "../../hooks/useRandomApi";
import Loader from "../loaderSpinner/Spinner";
import DisplayCocktail from "../displayCocktails/DisplayCocktail";
import Header from "../Header/Header";
import headerDetails from "../../library/headerDetails";

function Random() {
	const { randomResults, fetchRandomApi, errorMsg, isLoading } = useRandomApi();

	const randomCocktail = (e) => {
		e.preventDefault();
		fetchRandomApi();
	};

	return (
		<div className="Random">
			<Header header={headerDetails.barOf.random} />
			{isLoading ? (
				<Loader />
			) : (
				<form onChange={randomCocktail}>
					<button onClick={randomCocktail}>Random Cocktail</button>
					<DisplayCocktail results={randomResults} errorMsg={errorMsg} />
				</form>
			)}
		</div>
	);
}

export default Random;
