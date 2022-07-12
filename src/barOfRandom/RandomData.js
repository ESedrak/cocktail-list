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
                  {randomData.measure1} {randomData.ingredient1}
                </li>
                <li>
                  {randomData.measure2} {randomData.ingredient2}
                </li>
                <li>
                  {randomData.measure3} {randomData.ingredient3}
                </li>
                <li>
                  {randomData.measure4} {randomData.ingredient4}
                </li>
                <li>
                  {randomData.measure5} {randomData.ingredient5}
                </li>
                <li>
                  {randomData.measure6} {randomData.ingredient6}
                </li>
                <li>
                  {randomData.measure7} {randomData.ingredient7}
                </li>
                <li>
                  {randomData.measure8} {randomData.ingredient8}
                </li>
                <li>
                  {randomData.measure9} {randomData.ingredient9}
                </li>
                <li>
                  {randomData.measure10} {randomData.ingredient10}
                </li>
                <li>
                  {randomData.measure11} {randomData.ingredient11}
                </li>
                <li>
                  {randomData.measure12} {randomData.ingredient12}
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
