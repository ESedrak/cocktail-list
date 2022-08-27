import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import useAccount from "../../hooks/useAccount";
import headerDetails from "../../library/headerDetails";
import Header from "../Header/Header";

function Signup() {
	const { signup } = useAuth();
	const {
		emailRef,
		passwordRef,
		passwordConfirmRef,
		error,
		setError,
		setLoading,
	} = useAccount();

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
					<input type="email" ref={emailRef} required />
				</div>
				<div>
					<label>Password</label>
					<input type="password" ref={passwordRef} required />
				</div>
				<div>
					<label>Confirm Password</label>
					<input type="password" ref={passwordConfirmRef} required />
				</div>
				<button disabled={loading}>Sign up!</button>
			</form>
		</div>
	);
}

export default Signup;
