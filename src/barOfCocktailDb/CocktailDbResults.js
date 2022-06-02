import React from "react";
import "../Cocktail.css";

const CocktailDbResults = (props) => {
  //  console.log(props.results) to see data passed through from component More
  if (props.results) {
    return (
      <div className="CocktailDbResults">
        {props.results.map((cocktail, index) => {
          return (
            <section key={index} className="Cocktail-one">
              <img
                src={cocktail.strDrinkThumb}
                alt={cocktail.strCategory}
                width="100px"
                className="Cocktail-image-drink"
              />
              <div className="Cocktail-image-overlay">
                <h2 className="Cocktail-drink-name">{cocktail.strDrink}</h2>
                {/* The API list has room for up to 15 ingredients/measurements - however, haven't seen more than 10 (have allowed room for 12).
                 if needed, can add more (but at the time it is unnecessary) */}
                <div className="Cocktail-process">
                  <ul className="Cocktail-ingredients" role="presentation">
                    <li>
                      {cocktail.strIngredient1} {cocktail.strMeasure1}
                    </li>
                    <li>
                      {cocktail.strIngredient2} {cocktail.strMeasure2}
                    </li>
                    <li>
                      {cocktail.strIngredient3} {cocktail.strMeasure3}
                    </li>
                    <li>
                      {cocktail.strIngredient4} {cocktail.strMeasure4}
                    </li>
                    <li>
                      {cocktail.strIngredient5} {cocktail.strMeasure5}
                    </li>
                    <li>
                      {cocktail.strIngredient6} {cocktail.strMeasure6}
                    </li>
                    <li>
                      {cocktail.strIngredient7} {cocktail.strMeasure7}
                    </li>
                    <li>
                      {cocktail.strIngredient8} {cocktail.strMeasure8}
                    </li>
                    <li>
                      {cocktail.strIngredient9} {cocktail.strMeasure9}
                    </li>
                    <li>
                      {cocktail.strIngredient10} {cocktail.strMeasure10}
                    </li>
                    <li>
                      {cocktail.strIngredient11} {cocktail.strMeasure11}
                    </li>
                    <li>
                      {cocktail.strIngredient12} {cocktail.strMeasure12}
                    </li>
                  </ul>
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

export default CocktailDbResults;
