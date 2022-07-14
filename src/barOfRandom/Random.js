import RandomData from "./RandomData";
import "./Random.css";
import useRandomApi from "../hooks/useRandomApi";
import Loader from "../loaderSpinner/Spinner";

function Random() {
	const { isLoading, randomData, fetchRandomApi } = useRandomApi();

	const randomCocktail = (e) => {
		e.preventDefault();
		fetchRandomApi();
	};

	return (
		<div className="Random">
			<h2 className="Random-heading">Bar Random</h2>
			{isLoading ? (
				<Loader />
			) : (
				<form onChange={randomCocktail}>
					<button onClick={randomCocktail}>Random Cocktail</button>
					<RandomData randomData={randomData} />
				</form>
			)}
		</div>
	);
}

export default Random;
