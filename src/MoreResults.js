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
                      {cocktail.strIngredient1} {cocktail.strMeasure1}
                    </span>
                  </Col>
                  <Col sm={4}>
                    <span>
                      {cocktail.strIngredient2} {cocktail.strMeasure2}
                    </span>
                  </Col>
                  <Col sm={4}>
                    <span>
                      {cocktail.strIngredient3} {cocktail.strMeasure3}
                    </span>
                  </Col>
                  <Col sm={4}>
                    <span>
                      {cocktail.strIngredient4} {cocktail.strMeasure4}
                    </span>
                  </Col>
                  <Col sm={4}>
                    <span>
                      {cocktail.strIngredient5} {cocktail.strMeasure5}
                    </span>
                  </Col>
                  <Col sm={4}>
                    <span>
                      {cocktail.strIngredient6} {cocktail.strMeasure6}
                    </span>
                  </Col>
                </Row>
                <p>{cocktail.strInstructions}</p>
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
