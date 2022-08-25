import "./NavBar.css";
import { Link } from "react-router-dom";

function NavBar() {
	return (
		<div className="NavBar">
			<Link to="/signin" className="NavBar-link">
				Signin
			</Link>
			<Link to="/dashboard" className="NavBar-link">
				Dashboard
			</Link>
		</div>
	);
}

export default NavBar;
