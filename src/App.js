import "./App.css";
import Cocktail from "./barOfLiz/Cocktail";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import MoreCocktail from "./barOfCocktailDb/MoreCocktail";
import React from "react";
import Random from "./barOfRandom/Random";
import { Container, Row, Col } from "react-bootstrap";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Cocktails</h1>
          <Container>
            <nav className="App-nav">
              <Row>
                <Col sm={3}>
                  <Link to="/" className="App-link-liz">
                    Bar of Liz
                  </Link>
                </Col>
                <Col sm={5}>
                  <Link to="/more" className="App-link-db">
                    Bar of CocktailDB
                  </Link>
                </Col>
                <Col sm={4}>
                  <Link to="/random" className="App-link-random">
                    Bar of Random
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
          <Route exact path="/" element={<Cocktail />} />
          <Route
            path="/more"
            element={<MoreCocktail defaultDrink="Margarita" />}
          />
          <Route path="/random" element={<Random />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
