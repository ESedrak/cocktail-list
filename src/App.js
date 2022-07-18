import "./App.css";
import "./cocktail.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import DisplayLizCocktails from "./components/barOfLiz/DisplayLizCocktails";
import CocktailDb from "./components/barOfCocktailDb/CocktailDb";
import Random from "./components/barOfRandom/Random";

function App() {
	return (
		<Router>
			<div className="App">
				<header className="App-header">
					<h1>Cocktails</h1>
					<nav className="App-nav">
						<Link to="/" className="App-link">
							Bar Of Liz
						</Link>
						<Link to="/CocktailDb" className="App-link">
							Bar CocktailDB
						</Link>
						<Link to="/random" className="App-link">
							Bar Random
						</Link>
					</nav>
					<hr />
				</header>
				{/* Using version 6 react router to create multiple pages for cocktails */}
				<Routes>
					{/* Route DisplayLizCocktails will show my own personal list while CocktailDb/Random will show an online API list*/}
					<Route exact path="/" element={<DisplayLizCocktails />} />
					<Route path="/CocktailDb" element={<CocktailDb />} />
					<Route path="/random" element={<Random />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
