import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

// This structure of the App contains my own personal cocktail list (through Component Liz)
// and an online cocktail list https://www.thecocktaildb.com/api.php (through Component  CocktailDb and Random)
root.render(
  // React.StrictMode - Cause of network call being fired twice - Strict mode check for development only - does not impact production build
  // <React.StrictMode>
  <App />
  // </React.StrictMode>
);
reportWebVitals();
