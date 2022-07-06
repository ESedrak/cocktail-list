import React from "react";
import "./App.css";
import Liz from "./barOfLiz/Liz";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import CocktailDb from "./barOfCocktailDb/CocktailDb";
import Random from "./barOfRandom/Random";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Cocktails</h1>
          <nav className="App-nav">
            <Link to="/" className="App-link">
              Bar Of Liz
            </Link>
            <Link to="/CocktailDb" className="App-link">
              Bar CocktailDB
            </Link>
            <Link to="/random" className="App-link">
              Bar Random
            </Link>
          </nav>
          <hr />
        </header>
        {/* Using version 6 react router to create multiple pages for cocktails (My own perfected reatios + a list/api from the cocktaildb as a more extensive list) */}
        <Routes>
          {/* Cocktail will show my own personal list while More will show an online API list*/}
          <Route exact path="/" element={<Liz />} />
          <Route path="/CocktailDb" element={<CocktailDb />} />
          <Route path="/random" element={<Random />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
