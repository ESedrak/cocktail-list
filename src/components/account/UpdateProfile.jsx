import { useRef, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import Header from "../Header/Header";
import headerDetails from "../../library/headerDetails";

function UpdateProfile() {
	const emailRef = useRef();
	const passwordRef = useRef();
	const { currentUser } = useAuth();
	const [error, setError] = useState("");
	const [loading, setLoading] = useState();

	const navigate = useNavigate();

	async function handleSubmit(e) {
		// e.preventDefault();
		// signin(emailRef.current.value, passwordRef.current.value);
		// try {
		// 	setError("");
		// 	setLoading(true);
		// 	await signin(emailRef.current.value, passwordRef.current.value);
		// 	navigate("/Dashboard");
		// } catch (error) {
		// 	console.log(error.message);
		// 	setError("Failed to log in");
		// }
		// setLoading(false);
	}

	return (
		<div className="UpdateProfile">
			<Header header={headerDetails.account.updateProfile} />
			<Link to="../signup">Signup</Link>
			{error && <p>{error}</p>}
			<form onSubmit={handleSubmit}>
				<div>
					<label>Email Address</label>
					<input type="email" />
				</div>
				<div>
					<label>Password</label>
					<input type="password" />
				</div>
				<button>Sign in!</button>
			</form>
			<div>
				<Link to="/forgot-password">Forgot Password?</Link>
			</div>
		</div>
	);
}

export default UpdateProfile;
