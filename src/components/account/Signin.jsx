import { Link, useNavigate } from "react-router-dom";
import headerDetails from "../../library/headerDetails";
import Header from "../Header/Header";

function Signin() {
	return (
		<div className="Signin">
			<Header header={headerDetails.account.signin} />
			<Link to="/Signup">Sign up</Link>
			<form>
				<div>
					<label>Email Address</label>
					<input type="email" />
				</div>
				<div>
					<label>Password</label>
					<input type="password" />
				</div>
			</form>
		</div>
	);
}

export default Signin;
