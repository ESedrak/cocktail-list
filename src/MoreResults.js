import React from "react";

const MoreResults = (props) => {
  //  console.log(props.results) to see data passed through from component More
  console.log(props.results);
  if (props.results) {
    return (
      <div className="MoreResults">
        {props.results.map((cocktail, idDrink) => {
          return (
            <div key={idDrink}>
              <h2>{cocktail.strDrink}</h2>
              <img
                src={cocktail.strDrinkThumb}
                alt={cocktail.strCategory}
                width="100px"
              ></img>
              <p>{cocktail.strIngredient1}</p>
              <p>{cocktail.strMeasure1}</p>
              <p>{cocktail.strIngredient2}</p>
              <p>{cocktail.strMeasure2}</p>
              <p>{cocktail.strIngredient3}</p>
              <p>{cocktail.strMeasure3}</p>
              <p>{cocktail.strIngredient4}</p>
              <p>{cocktail.strMeasure4}</p>
              <p>{cocktail.strIngredient5}</p>
              <p>{cocktail.strMeasure5}</p>
              <p>{cocktail.strInstructions}</p>
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
};

export default MoreResults;
