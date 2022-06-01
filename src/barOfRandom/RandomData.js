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
          alt={randomResults.category}
          className="Cocktail-image-drink"
        />
        <div className="Cocktail-image-overlay">
          <h2 className="Cocktail-drink-name">{randomResults.name}</h2>
          <div className="Cocktail-process">
            <div className="Cocktail-ingredients">
              <div>
                {randomResults.ingredient1} {randomResults.measure1}
              </div>
              <div>
                {randomResults.ingredient2} {randomResults.measure2}
              </div>
              <div>
                {randomResults.ingredient3} {randomResults.measure3}
              </div>
              <div>
                {randomResults.ingredient4} {randomResults.measure4}
              </div>
              <div>
                {randomResults.ingredient5} {randomResults.measure5}
              </div>
              <div>
                {randomResults.ingredient6} {randomResults.measure6}
              </div>
              <div>
                {randomResults.ingredient7} {randomResults.measure7}
              </div>
              <div>
                {randomResults.ingredient8} {randomResults.measure8}
              </div>
              <div>
                {randomResults.ingredient9} {randomResults.measure9}
              </div>
              <div>
                {randomResults.ingredient10} {randomResults.measure10}
              </div>
              <div>
                {randomResults.ingredient11} {randomResults.measure11}
              </div>
            </div>
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
