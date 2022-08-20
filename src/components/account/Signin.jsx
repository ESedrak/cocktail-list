import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import headerDetails from "../../library/headerDetails";
import Header from "../Header/Header";

function Signin() {
	const emailRef = useRef();
	const passwordRef = useRef();
	const passwordConfirmRef = useRef();

	return (
		<div className="Signin">
			<Header header={headerDetails.account.signin} />
			<Link to="/Signup">Sign up</Link>
			<form>
				<div>
					<label>Email Address</label>
					<input type="email" ref={emailRef} />
				</div>
				<div>
					<label>Password</label>
					<input type="password" ref={passwordRef} />
				</div>
				<div>
					<label>Confirm Password</label>
					<input type="password" ref={passwordConfirmRef} />
				</div>
			</form>
		</div>
	);
}

export default Signin;
