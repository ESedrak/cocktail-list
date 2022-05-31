import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

// This structure of the App contains my own personal cocktail list (through Component Cocktail)
// and an online cocktail list https://www.thecocktaildb.com/api.php (through Component More and Random)
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
reportWebVitals();
