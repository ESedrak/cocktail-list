import DisplayCocktailDbResults from "./DisplayCocktailDbResults";
import "./cocktailDb.css";
import useCocktailApi from "../../hooks/useCocktailApi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/fontawesome-free-solid";
import Loader from "../loaderSpinner/Spinner";

function CocktailDb() {
	// use own Hooks (inside folder hooks)
	const {
		results,
		fetchCocktailApi,
		keyword,
		setKeyword,
		isLoading,
		errorMsg,
	} = useCocktailApi();

	const handleSearch = (e) => {
		e.preventDefault();
		fetchCocktailApi(keyword);
	};

	const cocktailSearch = (e) => {
		//Value of the search bar
		setKeyword(e.target.value);
	};

	return (
		<div className="CocktailDb">
			<h2 className="CocktailDb-heading">Bar TheCocktailDB</h2>
			<p className="CocktailDb-msg">Search over 650 cocktails</p>
			{isLoading ? (
				<Loader />
			) : (
				<div>
					<form onSubmit={handleSearch}>
						<input
							type="search"
							placeholder="Search for a Drink or Spirit"
							onChange={cocktailSearch}
							className="CocktailDb-searchbar"
						></input>
						<button
							type="button"
							onClick={handleSearch}
							className="CocktailDb-button"
						>
							<FontAwesomeIcon icon={faSearch} />
						</button>
					</form>
					<DisplayCocktailDbResults dbResults={results} errorMsg={errorMsg} />
				</div>
			)}
		</div>
	);
}

export default CocktailDb;
