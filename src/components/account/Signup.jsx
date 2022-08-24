import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import headerDetails from "../../library/headerDetails";
import Header from "../Header/Header";

function Signup() {
	const emailRef = useRef();
	const passwordRef = useRef();
	const passwordConfirmRef = useRef();
	const { signup } = useAuth();
	const [error, setError] = useState("");
	const [loading, setLoading] = useState();

	const navigate = useNavigate();

	async function handleSubmit(e) {
		e.preventDefault();

		signup(emailRef.current.value, passwordRef.current.value);

		if (passwordRef.current.value !== passwordConfirmRef.current.value) {
			return setError("Passwords do not match!");
		}

		try {
			setError("");
			setLoading(true);
			await signup(emailRef.current.value, passwordRef.current.value);
			navigate("/dashboard");
		} catch (error) {
			console.log(error);
			setError("Failed to create an account");
		}

		setLoading(false);
	}

	return (
		<div className="Signup">
			<Header header={headerDetails.account.signup} />
			<Link to="../signin">Signup</Link>
			{error && <p>{error}</p>}
			<form onSubmit={handleSubmit}>
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
				<button disabled={loading}>Sign up!</button>
			</form>
		</div>
	);
}

export default Signup;
