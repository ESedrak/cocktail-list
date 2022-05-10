import "./App.css";
import Cocktail from "./Cocktail";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import More from "./More";
import React from "react";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Bar of Liz</h1>
          <p>The perfected ratios of some of the best cocktails</p>
          <Link to="/">Home </Link>
          <Link to="/more">More</Link>
          <hr />
        </header>
        {/* Using version 6 react router to create multiple pages for cocktails (My own perfected reatios + a list/api from the cocktaildb as a more extensive list) */}
        <Routes>
          {/* Cocktail will show my own personal list while More will show an online API list*/}
          <Route exact path="/" element={<Cocktail />} />
          <Route path="/more" element={<More />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
