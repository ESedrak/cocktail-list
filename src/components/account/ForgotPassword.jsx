import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import headerDetails from "../../library/headerDetails";
import Header from "../Header/Header";

function ForgotPassword() {
	const emailRef = useRef();
	const passwordRef = useRef();
	const { resetPassword } = useAuth();
	const [error, setError] = useState("");
	const [loading, setLoading] = useState();
	const [message, setMessage] = useState("");

	async function handleSubmit(e) {
		e.preventDefault();

		try {
			setMessage("");
			setError("");
			setLoading(true);
			await resetPassword(emailRef.current.value);
			setMessage("Check your inbox for further instruction");
		} catch (error) {
			console.log(error.message);
			setError("Failed to reset password");
		}

		setLoading(false);
	}
	return (
		<div className="ForgotPassword">
			<h3>Password Reset</h3>
			{error && <p>{error}</p>}
			{message && <p>{message}</p>}
			<form onSubmit={handleSubmit}>
				<div>
					<label>Email Address</label>
					<input type="email" ref={emailRef} />
				</div>
				<button disabled={loading}>Reset Password</button>
			</form>
			<Link to="../Signin">Signup</Link>
		</div>
	);
}

export default ForgotPassword;
