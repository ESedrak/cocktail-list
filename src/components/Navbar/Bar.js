import { Link } from "react-router-dom";

function Bar() {
	return (
		<div>
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
		</div>
	);
}

export default Bar;
