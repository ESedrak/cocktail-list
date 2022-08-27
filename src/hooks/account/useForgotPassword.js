import { useState, useRef } from "react";

function useForgotPassword() {
	const emailRef = useRef();
	const [error, setError] = useState("");
	const [loading, setLoading] = useState();
	const [message, setMessage] = useState("");

	return {
		emailRef,
		error,
		setError,
		setLoading,
		setMessage,
	};
}

export default useForgotPassword;
