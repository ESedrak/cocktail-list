import { useState, useRef } from "react";

function useUpdateProfile() {
	const emailRef = useRef();
	const passwordRef = useRef();
	const passwordConfirmRef = useRef();
	const [error, setError] = useState("");
	const [loading, setLoading] = useState();

	return {
		emailRef,
		passwordConfirmRef,
		passwordRef,
		error,
		setError,
		setLoading,
	};
}

export default useUpdateProfile;
