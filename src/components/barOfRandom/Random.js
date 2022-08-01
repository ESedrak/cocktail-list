import "./Random.css";
import useRandomApi from "../../hooks/useRandomApi";
import Loader from "../loaderSpinner/Spinner";
import DisplayCocktail from "../displayCocktails/DisplayCocktail";

function Random() {
	const { randomResults, fetchRandomApi, errorMsg, isLoading } = useRandomApi();

	const randomCocktail = (e) => {
		e.preventDefault();
		fetchRandomApi();
	};

	return (
		<div className="Random">
			<h2 className="Random-heading">Bar Random</h2>
			<p className="Random-msg">Feeling Lucky?</p>
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
