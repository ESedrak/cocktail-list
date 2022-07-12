import React from "react";
import "../Cocktail.css";

function RandomData(props) {
  // console.log(props.randomData) to get data from Random component
  const randomData = props.randomData;

    return (
      <div className="RandomData">
        <section className="Cocktail-one">
          <img
            src={randomData.strDrinkThumb}
            alt={randomData.strDrink}
            className="Cocktail-image-drink"
            width="560px"
            height="560px"
          />
          <div className="Cocktail-image-overlay">
            <h2 className="Cocktail-drink-name">{randomData.strDrink}</h2>
            <div className="Cocktail-process">
              <ul className="Cocktail-ingredients" role="presentation">
                <li>
                  {randomData.strMeasure1} {randomData.strIngredient1}
                </li>
                <li>
                  {randomData.strMeasure2} {randomData.strIngredient2}
                </li>
                <li>
                  {randomData.strMeasure3} {randomData.strIngredient3}
                </li>
                <li>
                  {randomData.strMeasure4} {randomData.strIngredient4}
                </li>
                <li>
                  {randomData.strMeasure5} {randomData.strIngredient5}
                </li>
                <li>
                  {randomData.strMeasure6} {randomData.strIngredient6}
                </li>
                <li>
                  {randomData.strMeasure7} {randomData.strIngredient7}
                </li>
                <li>
                  {randomData.strMeasure8} {randomData.strIngredient8}
                </li>
                <li>
                  {randomData.strMeasure9} {randomData.strIngredient9}
                </li>
                <li>
                  {randomData.strMeasure10} {randomData.strIngredient10}
                </li>
                <li>
                  {randomData.strMeasure11} {randomData.strIngredient11}
                </li>
                <li>
                  {randomData.strMeasure12} {randomData.strIngredient12}
                </li>
              </ul>
              <div className="Cocktail-instructions">
                {randomData.strInstructions}
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  } 


export default RandomData;
