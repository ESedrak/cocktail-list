import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

function Dashboard() {
	const [error, setError] = useState("");
	const { currentUser, logout } = useAuth();
	const navigate = useNavigate();

	const handleLogout = async () => {
		setError("");

		try {
			await logout();
			navigate("/");
			console.log("You are logged out!");
		} catch (e) {
			console.log(e.message);
		}
	};

	return (
		<div>
			<h3>Profile</h3>
			{error && <p>{error}</p>}
			Email: {currentUser.email}
			<Link to="/update-profile">Update Profile</Link>
			<button onClick={handleLogout}>Logout</button>
		</div>
	);
}

export default Dashboard;
