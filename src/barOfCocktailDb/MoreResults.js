import React from "react";
import "./MoreResults.css";
import "../barOfLiz/Cocktail.css";

const MoreResults = (props) => {
  //  console.log(props.results) to see data passed through from component More
  if (props.results) {
    return (
      <div className="MoreResults">
        {props.results.map((cocktail, index) => {
          return (
            <section key={index} className="Cocktail-one">
              <img
                src={cocktail.strDrinkThumb}
                alt={cocktail.strTags}
                width="100px"
                className="Cocktail-image-drink"
              />
              <div className="Cocktail-image-overlay">
                <h2 className="Cocktail-drink-name">{cocktail.strDrink}</h2>
                {/* The API list has room for up to 15 ingredients/measurements - however, haven't seen more than 9 (have allowed room for 10).
                 if needed, can add more (but at the time it is unnecessary) */}
                <div className="Cocktail-process">
                  <div className="Cocktail-ingredients">
                    <div>
                      {cocktail.strIngredient1} {cocktail.strMeasure1}
                    </div>
                    <div>
                      {cocktail.strIngredient2} {cocktail.strMeasure2}
                    </div>
                    <div>
                      {cocktail.strIngredient2} {cocktail.strMeasure2}
                    </div>
                    <div>
                      {cocktail.strIngredient3} {cocktail.strMeasure3}
                    </div>
                    <div>
                      {cocktail.strIngredient4} {cocktail.strMeasure4}
                    </div>
                    <div>
                      {cocktail.strIngredient5} {cocktail.strMeasure5}
                    </div>
                    <div>
                      {cocktail.strIngredient6} {cocktail.strMeasure6}
                    </div>
                    <div>
                      {cocktail.strIngredient7} {cocktail.strMeasure7}
                    </div>
                    <div>
                      {cocktail.strIngredient8} {cocktail.strMeasure8}
                    </div>
                    <div>
                      {cocktail.strIngredient9} {cocktail.strMeasure9}
                    </div>
                    <div>
                      {cocktail.strIngredient10} {cocktail.strMeasure10}
                    </div>
                  </div>
                  <p className="Cocktail-instructions">
                    {cocktail.strInstructions}
                  </p>
                </div>
              </div>
            </section>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
};

export default MoreResults;
