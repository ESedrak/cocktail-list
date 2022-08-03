import "./CocktailDb.css";
import useCocktailApi from "../../hooks/useCocktailApi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/fontawesome-free-solid";
import Loader from "../loaderSpinner/Spinner";
import DisplayCocktail from "../displayCocktails/DisplayCocktail";
import Header from "../Header/Header";
import headerDetails from "../../library/headerDetails";

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

	const handleSubmit = (e) => {
		e.preventDefault();
		fetchCocktailApi(keyword);
	};

	const handleSearch = (e) => {
		//Value of the search bar
		setKeyword(e.target.value);
	};

	return (
		<div className="CocktailDb">
			<Header header={headerDetails.barOf.cocktailDb} />
			{isLoading ? (
				<Loader />
			) : (
				<div>
					<form onSubmit={handleSubmit}>
						<input
							type="search"
							placeholder="Search for a Drink or Spirit"
							onChange={handleSearch}
							className="CocktailDb-searchbar"
						/>
						<button
							type="button"
							onClick={handleSubmit}
							className="CocktailDb-button"
						>
							<FontAwesomeIcon icon={faSearch} />
						</button>
					</form>
					<DisplayCocktail results={results} errorMsg={errorMsg} />
				</div>
			)}
		</div>
	);
}

export default CocktailDb;
