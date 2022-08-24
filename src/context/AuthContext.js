import { createContext, useContext, useState, useEffect } from "react";
import {
	createUserWithEmailAndPassword,
	onAuthStateChanged,
	sendPasswordResetEmail,
	signInWithEmailAndPassword,
	signOut,
} from "firebase/auth";
import { auth } from "../firebase";

const UserContext = createContext();

export function AuthContextProvider({ children }) {
	const [currentUser, setCurrentUser] = useState({});
	const [loading, setLoading] = useState(true);

	function signup(email, password) {
		return createUserWithEmailAndPassword(auth, email, password);
	}

	function signin(email, password) {
		return signInWithEmailAndPassword(auth, email, password);
	}

	function logout(email, password) {
		return signOut(auth);
	}

	function resetPassword(email) {
		return sendPasswordResetEmail(auth);
	}

	function updateEmail(email) {
		return currentUser.updateEmail(email);
	}

	function updatePassword(password) {
		return currentUser.updatePassword(password);
	}

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
			setCurrentUser(currentUser);
			setLoading(false);
		});

		return () => {
			unsubscribe();
		};
	}, []);

	const value = {
		signup,
		currentUser,
		signin,
		logout,
		resetPassword,
		updateEmail,
		updatePassword,
	};

	return (
		<UserContext.Provider value={value}>
			{!loading && children}
		</UserContext.Provider>
	);
}

export const useAuth = () => {
	return useContext(UserContext);
};
