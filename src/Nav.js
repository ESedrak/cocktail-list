import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="App-nav">
      <Row>
        <Col xs="auto">
          <Link to="/" className="App-link-liz">
            Bar Of Liz
          </Link>
        </Col>
        <Col xs="auto">
          <Link to="/CocktailDb" className="App-link-db">
            Bar CocktailDB
          </Link>
        </Col>
        <Col xs="auto">
          <Link to="/random" className="App-link-random">
            Bar Random
          </Link>
        </Col>
      </Row>
    </nav>
  );
}
