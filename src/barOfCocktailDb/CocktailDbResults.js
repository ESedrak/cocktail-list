import React from "react";
import "../Cocktail.css";
import Loader from "../loaderSpinner/Spinner";

const CocktailDbResults = (props) => {
  //  console.log(props.results) to see data passed through from component CocktailDb
  if (props.results) {
    return (
      <div className="CocktailDbResults">
        {props.results.map((cocktail, index) => {
          return (
            <section key={index} className="Cocktail-one">
              <img
                src={cocktail.strDrinkThumb}
                alt={cocktail.strCategory}
                className="Cocktail-image-drink"
                width="560px"
                height="560px"
              />
              <div className="Cocktail-image-overlay">
                <h2 className="Cocktail-drink-name">{cocktail.strDrink}</h2>
                {/* The API list has room for up to 15 ingredients/measurements - however, haven't seen more than 10 (have allowed room for 12).
                 if needed, can add more (but at the time it is unnecessary) */}
                <div className="Cocktail-process">
                  <ul className="Cocktail-ingredients" role="presentation">
                    <li>
                      {cocktail.strMeasure1} {cocktail.strIngredient1}
                    </li>
                    <li>
                      {cocktail.strMeasure2} {cocktail.strIngredient2}
                    </li>
                    <li>
                      {cocktail.strMeasure3} {cocktail.strIngredient3}
                    </li>
                    <li>
                      {cocktail.strMeasure4} {cocktail.strIngredient4}
                    </li>
                    <li>
                      {cocktail.strMeasure5} {cocktail.strIngredient5}
                    </li>
                    <li>
                      {cocktail.strMeasure6} {cocktail.strIngredient6}
                    </li>
                    <li>
                      {cocktail.strMeasure7} {cocktail.strIngredient7}
                    </li>
                    <li>
                      {cocktail.strMeasure8} {cocktail.strIngredient8}
                    </li>
                    <li>
                      {cocktail.strMeasure9} {cocktail.strIngredient9}
                    </li>
                    <li>
                      {cocktail.strMeasure10} {cocktail.strIngredient10}
                    </li>
                    <li>
                      {cocktail.strMeasure11} {cocktail.strIngredient11}
                    </li>
                    <li>
                      {cocktail.strMeasure12} {cocktail.strIngredient12}
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
    return (
      <div>
        <h4>Search again</h4>
        <Loader />
      </div>
    );
  }
};

export default CocktailDbResults;
