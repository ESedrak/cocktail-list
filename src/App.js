import "./App.css";
import Liz from "./barOfLiz/Liz";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import CocktailDb from "./barOfCocktailDb/CocktailDb";
import React from "react";
import Random from "./barOfRandom/Random";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Cocktails</h1>
          <Container>
            <nav className="App-nav">
              <Row>
                <Col md={4} xs="auto">
                  <Link to="/" className="App-link-liz">
                    Bar Of Liz
                  </Link>
                </Col>
                <Col md={4} xs="auto">
                  <Link to="/more" className="App-link-db">
                    Bar CocktailDB
                  </Link>
                </Col>
                <Col md={4} xs="auto">
                  <Link to="/random" className="App-link-random">
                    Bar Random
                  </Link>
                </Col>
              </Row>
            </nav>
          </Container>
          <hr />
        </header>
        {/* Using version 6 react router to create multiple pages for cocktails (My own perfected reatios + a list/api from the cocktaildb as a more extensive list) */}
        <Routes>
          {/* Cocktail will show my own personal list while More will show an online API list*/}
          <Route exact path="/" element={<Liz />} />
          <Route
            path="/more"
            element={<CocktailDb defaultDrink="Margarita" />}
          />
          <Route path="/random" element={<Random />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
