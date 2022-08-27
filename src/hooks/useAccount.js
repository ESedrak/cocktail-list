import { useState, useRef } from "react";

function useAccount() {
	const emailRef = useRef();
	const passwordRef = useRef();
	const passwordConfirmRef = useRef();
	const [error, setError] = useState("");
	const [loading, setLoading] = useState();
	const [message, setMessage] = useState("");

	return {
		emailRef,
		passwordRef,
		passwordConfirmRef,
		error,
		setError,
		setLoading,
		setMessage,
	};
}

export default useAccount;
