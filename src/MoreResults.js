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
                      <strong>{cocktail.strIngredient1}</strong>{" "}
                      <em>{cocktail.strMeasure1}</em>
                    </Col>
                    <Col sm={4}>
                      <strong>{cocktail.strIngredient2}</strong>{" "}
                      <em>{cocktail.strMeasure2}</em>
                    </Col>
                    <Col sm={4}>
                      <strong>{cocktail.strIngredient2}</strong>{" "}
                      <em>{cocktail.strMeasure2}</em>
                    </Col>
                    <Col sm={4}>
                      <strong>{cocktail.strIngredient3}</strong>{" "}
                      <em>{cocktail.strMeasure3}</em>
                    </Col>
                    <Col sm={4}>
                      <strong>{cocktail.strIngredient4}</strong>{" "}
                      <em>{cocktail.strMeasure4}</em>
                    </Col>
                    <Col sm={4}>
                      <strong>{cocktail.strIngredient5}</strong>{" "}
                      <em>{cocktail.strMeasure5}</em>
                    </Col>
                    <Col sm={4}>
                      <strong>{cocktail.strIngredient6}</strong>{" "}
                      <em>{cocktail.strMeasure6}</em>
                    </Col>
                    <Col sm={4}>
                      <strong>{cocktail.strIngredient7}</strong>{" "}
                      <em>{cocktail.strMeasure7}</em>
                    </Col>
                    <Col sm={4}>
                      <strong>{cocktail.strIngredient8}</strong>{" "}
                      <em>{cocktail.strMeasure8}</em>
                    </Col>
                    <Col sm={4}>
                      <strong>{cocktail.strIngredient9}</strong>
                      <em>{cocktail.strMeasure9}</em>
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
