import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const MoreResults = (props) => {
  //  console.log(props.results) to see data passed through from component More
  console.log(props.results);
  if (props.results) {
    return (
      <div className="MoreResults">
        <Container>
          {props.results.map((cocktail, idDrink) => {
            return (
              <div key={idDrink}>
                <h2>{cocktail.strDrink}</h2>
                <img
                  src={cocktail.strDrinkThumb}
                  alt={cocktail.strCategory}
                  width="100px"
                ></img>
                <Row>
                  <Col sm={4}>
                    <span>
                      <strong>{cocktail.strIngredient1}</strong>{" "}
                      <em>{cocktail.strMeasure1}</em>
                    </span>
                  </Col>
                  <Col sm={4}>
                    <span>
                      <strong>{cocktail.strIngredient2}</strong>{" "}
                      <em>{cocktail.strMeasure2}</em>
                    </span>
                  </Col>
                  <Col sm={4}>
                    <span>
                      <strong>{cocktail.strIngredient2}</strong>{" "}
                      <em>{cocktail.strMeasure2}</em>
                    </span>
                  </Col>
                  <Col sm={4}>
                    <span>
                      <strong>{cocktail.strIngredient3}</strong>{" "}
                      <em>{cocktail.strMeasure3}</em>
                    </span>
                  </Col>
                  <Col sm={4}>
                    <span>
                      <strong>{cocktail.strIngredient4}</strong>{" "}
                      <em>{cocktail.strMeasure4}</em>
                    </span>
                  </Col>
                  <Col sm={4}>
                    <span>
                      <strong>{cocktail.strIngredient5}</strong>{" "}
                      <em>{cocktail.strMeasure5}</em>
                    </span>
                  </Col>
                  <Col sm={4}>
                    <span>
                      <strong>{cocktail.strIngredient6}</strong>{" "}
                      <em>{cocktail.strMeasure6}</em>
                    </span>
                  </Col>
                  <Col sm={4}>
                    <span>
                      <strong>{cocktail.strIngredient7}</strong>{" "}
                      <em>{cocktail.strMeasure7}</em>
                    </span>
                  </Col>
                  <Col sm={4}>
                    <span>
                      <strong>{cocktail.strIngredient8}</strong>{" "}
                      <em>{cocktail.strMeasure8}</em>
                    </span>
                  </Col>
                  <Col sm={4}>
                    <span>
                      <strong>{cocktail.strIngredient9}</strong>{" "}
                      <em>{cocktail.strMeasure9}</em>
                    </span>
                  </Col>
                </Row>
                <p className="MoreResultsIntructions">
                  {cocktail.strInstructions}
                </p>
              </div>
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
