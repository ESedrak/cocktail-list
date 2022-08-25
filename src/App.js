import "./App.css";
import "./Cocktail.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import NavBar from "./components/Navbar/NavBar";
import Bar from "./components/Navbar/Bar";
import MyRoutes from "./router/MyRoutes";

function App() {
	return (
		<div className="App">
			<Router>
				<header className="App-header">
					<NavBar />
					<h1>Cocktails</h1>
					<Bar />
					<hr />
				</header>
				{/* Using version 6 react router to create multiple pages for cocktails */}
				<MyRoutes />
			</Router>
		</div>
	);
}

export default App;
