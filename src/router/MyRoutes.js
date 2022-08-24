import { Routes, Route } from "react-router-dom";
import { AuthContextProvider } from "../context/AuthContext";
import Signin from "../components/account/Signin";
import Signup from "../components/account/Signup";
import Dashboard from "../components/account/Dashboard";
import PrivateRoute from "../components/account/PrivateRoute";
import ForgotPassword from "../components/account/ForgotPassword";
import UpdateProfile from "../components/account/UpdateProfile";
import LizCocktails from "../components/barOfLiz/LizCocktails";
import CocktailDb from "../components/barOfCocktailDb/CocktailDb";
import Random from "../components/barOfRandom/Random";
import You from "../components/barOfYou/You";

function MyRoutes() {
	return (
		<div className="MyRoutes">
			<AuthContextProvider>
				<Routes>
					<Route exact path="/" element={<LizCocktails />} />
					<Route path="/CocktailDb" element={<CocktailDb />} />
					<Route path="/random" element={<Random />} />
					<Route path="/You" element={<You />} />
					<Route
						path="/dashboard"
						element={
							<PrivateRoute>
								<Dashboard />
							</PrivateRoute>
						}
					/>
					<Route
						path="/update-profile"
						element={
							<PrivateRoute>
								<UpdateProfile />
							</PrivateRoute>
						}
					/>
					<Route path="/signin" element={<Signin />} />
					<Route path="/signup" element={<Signup />} />
					<Route path="forgot-password" element={<ForgotPassword />} />
				</Routes>
			</AuthContextProvider>
		</div>
	);
}

export default MyRoutes;
