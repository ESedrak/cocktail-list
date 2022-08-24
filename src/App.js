import "./App.css";
import "./Cocktail.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import MyRoutes from "./router/MyRoutes";

function App() {
	return (
		<div className="App">
			<Router>
				<header className="App-header">
					<Link to="/signin" className="App-acc">
						Signin
					</Link>
					<Link to="/dashboard" className="App-acc">
						Dashboard
					</Link>
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
				<MyRoutes />
			</Router>
		</div>
	);
}

export default App;
