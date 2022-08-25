import "./Bar.css";
import { Link } from "react-router-dom";

function Bar() {
	return (
		<div className="Bar">
			<Link to="/" className="Bar-link">
				Bar Of Liz
			</Link>
			<Link to="/CocktailDb" className="Bar-link">
				Bar CocktailDB
			</Link>
			<Link to="/random" className="Bar-link">
				Bar Random
			</Link>
			<Link to="/You" className="Bar-link">
				Bar Of You
			</Link>
		</div>
	);
}

export default Bar;
