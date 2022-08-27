import { useState, useRef } from "react";

function useSignin() {
	const emailRef = useRef();
	const passwordRef = useRef();
	const [error, setError] = useState("");
	const [loading, setLoading] = useState();
	return {
		emailRef,
		passwordRef,
		error,
		setError,
		setLoading,
	};
}

export default useSignin;
