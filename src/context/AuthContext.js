import { createContext, useContext, useState, useEffect } from "react";
import {
	createUserWithEmailAndPassword,
	onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../firebase";

const UserContext = createContext();

export function AuthContextProvider({ children }) {
	const [currentUser, setCurrentUser] = useState({});

	function signup(email, password) {
		return createUserWithEmailAndPassword(auth, email, password);
	}

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
			setCurrentUser(currentUser);
		});

		return () => {
			unsubscribe();
		};
	}, []);

	const value = {
		signup,
		currentUser,
	};

	return (
		<>
			<UserContext.Provider value={value}>{children}</UserContext.Provider>
		</>
	);
}

export const useAuth = () => {
	return useContext(UserContext);
};
