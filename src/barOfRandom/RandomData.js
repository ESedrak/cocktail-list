import React from "react";
import "../Cocktail.css";

const RandomData = (props) => {
  // console.log(props.randomData) to get data from MoreRandom component
  const randomResults = props.randomData;
  return (
    <div className="RandomData">
      <section className="Cocktail-one">
        <img
          src={randomResults.image}
          alt={randomResults.name}
          className="Cocktail-image-drink"
        />
        <div className="Cocktail-image-overlay">
          <h2 className="Cocktail-drink-name">{randomResults.name}</h2>
          <div className="Cocktail-process">
            <ul className="Cocktail-ingredients" role="presentation">
              <li>
                {randomResults.ingredient1} {randomResults.measure1}
              </li>
              <li>
                {randomResults.ingredient2} {randomResults.measure2}
              </li>
              <li>
                {randomResults.ingredient3} {randomResults.measure3}
              </li>
              <li>
                {randomResults.ingredient4} {randomResults.measure4}
              </li>
              <li>
                {randomResults.ingredient5} {randomResults.measure5}
              </li>
              <li>
                {randomResults.ingredient6} {randomResults.measure6}
              </li>
              <li>
                {randomResults.ingredient7} {randomResults.measure7}
              </li>
              <li>
                {randomResults.ingredient8} {randomResults.measure8}
              </li>
              <li>
                {randomResults.ingredient9} {randomResults.measure9}
              </li>
              <li>
                {randomResults.ingredient10} {randomResults.measure10}
              </li>
              <li>
                {randomResults.ingredient11} {randomResults.measure11}
              </li>
              <li>
                {randomResults.ingredient12} {randomResults.measure12}
              </li>
            </ul>
            <div className="Cocktail-instructions">
              {randomResults.instructions}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RandomData;
