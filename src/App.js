import "./App.css";
import "./Cocktail.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LizCocktails from "./components/barOfLiz/LizCocktails";
import CocktailDb from "./components/barOfCocktailDb/CocktailDb";
import Random from "./components/barOfRandom/Random";
import You from "./components/barOfYou/You";

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
						<Link to="/You" className="App-link">
							Bar Of You
						</Link>
					</nav>
					<hr />
				</header>
				{/* Using version 6 react router to create multiple pages for cocktails */}
				<Routes>
					{/* Route LizCocktails will show my own personal list while CocktailDb/Random will show an online API list*/}
					<Route exact path="/" element={<LizCocktails />} />
					<Route path="/CocktailDb" element={<CocktailDb />} />
					<Route path="/random" element={<Random />} />
					<Route path="/You" element={<You />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
