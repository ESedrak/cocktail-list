import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./MoreResults.css";
import "./Cocktail.css";

const MoreResults = (props) => {
  //  console.log(props.results) to see data passed through from component More
  if (props.results) {
    return (
      <div className="MoreResults">
        <Container>
          {props.results.map((cocktail, index) => {
            return (
              <section key={index} className="Cocktail-one">
                <img
                  src={cocktail.strDrinkThumb}
                  alt={cocktail.strCategory}
                  width="100px"
                  className="Cocktail-image-drink"
                ></img>
                <div className="Cocktail-image-overlay">
                  <h2 className="Cocktail-drink-name">{cocktail.strDrink}</h2>
                  {/* The API list has room for up to 15 ingredients/measurements - however, haven't seen more than 8 (have allowed room for 9).
                 if needed, can add more (but at the time it is unnecessary) */}
                  <Row className="MoreResults-row">
                    <Col sm={4}>
                      {cocktail.strIngredient1} {cocktail.strMeasure1}
                    </Col>
                    <Col sm={4}>
                      {cocktail.strIngredient2} {cocktail.strMeasure2}
                    </Col>
                    <Col sm={4}>
                      {cocktail.strIngredient2} {cocktail.strMeasure2}
                    </Col>
                    <Col sm={4}>
                      {cocktail.strIngredient3} {cocktail.strMeasure3}
                    </Col>
                    <Col sm={4}>
                      {cocktail.strIngredient4} {cocktail.strMeasure4}
                    </Col>
                    <Col sm={4}>
                      {cocktail.strIngredient5} {cocktail.strMeasure5}
                    </Col>
                    <Col sm={4}>
                      {cocktail.strIngredient6} {cocktail.strMeasure6}
                    </Col>
                    <Col sm={4}>
                      {cocktail.strIngredient7} {cocktail.strMeasure7}
                    </Col>
                    <Col sm={4}>
                      {cocktail.strIngredient8} {cocktail.strMeasure8}
                    </Col>
                    <Col sm={4}>
                      {cocktail.strIngredient9} {cocktail.strMeasure9}
                    </Col>
                  </Row>
                  <p className="instructions">{cocktail.strInstructions}</p>
                </div>
              </section>
            );
          })}
        </Container>
      </div>
    );
  } else {
    return null;
  }
};

export default MoreResults;
