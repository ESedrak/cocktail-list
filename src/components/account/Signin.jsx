import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import useSignin from "../../hooks/account/useSignin";
import Header from "../Header/Header";
import headerDetails from "../../library/headerDetails";

function Signin() {
	const { signin } = useAuth();
	const { emailRef, passwordRef, error, setError, setLoading } = useSignin();

	const navigate = useNavigate();

	async function handleSubmit(e) {
		e.preventDefault();

		signin(emailRef.current.value, passwordRef.current.value);

		try {
			setError("");
			setLoading(true);
			await signin(emailRef.current.value, passwordRef.current.value);
			navigate("/dashboard");
		} catch (error) {
			console.log(error.message);
			setError("Failed to log in");
		}

		setLoading(false);
	}

	return (
		<div className="Signup">
			<Header header={headerDetails.account.signin} />
			<Link to="../signup">Signup</Link>
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

				<button>Sign in!</button>
			</form>
			<div>
				<Link to="/forgot-password">Forgot Password?</Link>
			</div>
		</div>
	);
}

export default Signin;
