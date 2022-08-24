import { useRef, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import Header from "../Header/Header";
import headerDetails from "../../library/headerDetails";

function UpdateProfile() {
	const emailRef = useRef();
	const passwordRef = useRef();
	const passwordConfirmRef = useRef();
	const { currentUser, updatePassword, updateEmail } = useAuth();
	const [error, setError] = useState("");
	const [loading, setLoading] = useState();

	const navigate = useNavigate();

	function handleSubmit(e) {
		e.preventDefault();

		if (passwordRef.current.value !== passwordConfirmRef.current.value) {
			return setError("Passwords do not match!");
		}

		const promises = [];
		setLoading(true);
		setError("");

		if (emailRef.current.value !== currentUser.email) {
			promises.push(updateEmail(emailRef.current.value));
		}

		if (passwordRef.current.value) {
			promises.push(updatePassword(passwordRef.current.value));
		}

		Promise.all(promises)
			.then(() => {
				navigate("/dashboard");
			})
			.catch(() => {
				setError("Failed to update account");
			})
			.finally(() => {
				setLoading(false);
			});

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
