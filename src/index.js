import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
	// React.StrictMode - Cause of network call being fired twice(turn on for debugging) - Strict mode check for development only - does not impact production build
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
reportWebVitals();
