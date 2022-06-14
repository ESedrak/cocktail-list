import React from "react";
import "../Cocktail.css";
import Loader from "../loaderSpinner/Spinner";

const RandomData = (props) => {
  // console.log(props.randomData) to get data from Random component

  const randomResults = props.randomData;
  return (
    <div className="RandomData">
      <section className="Cocktail-one">
        <img
          src={randomResults.image}
          alt={randomResults.category}
          className="Cocktail-image-drink"
          width="500px"
          height="500px"
        />
        <div className="Cocktail-image-overlay">
          <h2 className="Cocktail-drink-name">{randomResults.name}</h2>
          <div className="Cocktail-process">
            <ul className="Cocktail-ingredients" role="presentation">
              <li>
                {randomResults.measure1} {randomResults.ingredient1}
              </li>
              <li>
                {randomResults.measure2} {randomResults.ingredient2}
              </li>
              <li>
                {randomResults.measure3} {randomResults.ingredient3}
              </li>
              <li>
                {randomResults.measure4} {randomResults.ingredient4}
              </li>
              <li>
                {randomResults.measure5} {randomResults.ingredient5}
              </li>
              <li>
                {randomResults.measure6} {randomResults.ingredient6}
              </li>
              <li>
                {randomResults.measure7} {randomResults.ingredient7}
              </li>
              <li>
                {randomResults.measure8} {randomResults.ingredient8}
              </li>
              <li>
                {randomResults.measure9} {randomResults.ingredient9}
              </li>
              <li>
                {randomResults.measure10} {randomResults.ingredient10}
              </li>
              <li>
                {randomResults.measure11} {randomResults.ingredient11}
              </li>
              <li>
                {randomResults.measure12} {randomResults.ingredient12}
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
