import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import headerDetails from "../../library/headerDetails";
import Header from "../Header/Header";

function Signup() {
	const emailRef = useRef();
	const passwordRef = useRef();
	const passwordConfirmRef = useRef();

	return (
		<div className="Signup">
			<Header header={headerDetails.account.signup} />
			<Link to="./Signin"> Sign in</Link>
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
				<button>Sign up!</button>
			</form>
		</div>
	);
}

export default Signup;
