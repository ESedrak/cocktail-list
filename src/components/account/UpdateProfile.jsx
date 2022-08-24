import { useRef, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import Header from "../Header/Header";
import headerDetails from "../../library/headerDetails";

function UpdateProfile() {
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
			// await signup(emailRef.current.value, passwordRef.current.value);
			navigate("/dashboard");
		} catch (error) {
			console.log(error);
			setError("Failed to create an account");
		}

		setLoading(false);
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
					<input type="password" placeholder="Leave blank to keep the same" />
				</div>
				<div>
					<label>Confirm Password</label>
					<input
						type="password"
						ref={passwordConfirmRef}
						placeholder="Leave blank to keep the same"
					/>
				</div>
				<button>Update</button>
			</form>
			<div>
				<Link to="/dashboard">Cancel</Link>
			</div>
		</div>
	);
}

export default UpdateProfile;
