import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

function PrivateRoute({ children }) {
	const { currentUser } = useAuth();

	if (!currentUser) {
		return <Navigate to="/signin" />;
	}
	return children;
}

export default PrivateRoute;
