import { useState, useRef } from "react";

function useSignup() {
	const emailRef = useRef();
	const passwordRef = useRef();
	const passwordConfirmRef = useRef();
	const [error, setError] = useState("");
	const [loading, setLoading] = useState();
	return {
		emailRef,
		passwordRef,
		passwordConfirmRef,
		error,
		setError,
		setLoading,
	};
}

export default useSignup;
