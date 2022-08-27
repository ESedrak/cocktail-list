import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import Header from "../Header/Header";
import headerDetails from "../../library/headerDetails";
import useAccount from "../../hooks/useAccount";

function UpdateProfile() {
	const { currentUser, updatePassword, updateEmail } = useAuth();
	const {
		emailRef,
		passwordRef,
		passwordConfirmRef,
		error,
		setError,
		setLoading,
	} = useAccount();

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
