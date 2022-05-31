import React from "react";
import "../barOfLiz/Cocktail.css";

const RandomData = (props) => {
  // console.log(props.randomData) to get data from MoreRandom component
  return (
    <div className="RandomData">
      <section className="Cocktail-one">
        <img
          src={props.randomData.image}
          alt={props.randomData.category}
          className="Cocktail-image-drink"
        />
        <div className="Cocktail-image-overlay">
          <h2 className="Cocktail-drink-name">{props.randomData.name}</h2>
          <div className="Cocktail-process">
            <div className="Cocktail-ingredients">
              <div>
                {props.randomData.ingredient1} {props.randomData.measure1}
              </div>
              <div>
                {props.randomData.ingredient2} {props.randomData.measure2}
              </div>
              <div>
                {props.randomData.ingredient3} {props.randomData.measure3}
              </div>
              <div>
                {props.randomData.ingredient4} {props.randomData.measure4}
              </div>
              <div>
                {props.randomData.ingredient5} {props.randomData.measure5}
              </div>
              <div>
                {props.randomData.ingredient6} {props.randomData.measure6}
              </div>
              <div>
                {props.randomData.ingredient7} {props.randomData.measure7}
              </div>
              <div>
                {props.randomData.ingredient8} {props.randomData.measure8}
              </div>
              <div>
                {props.randomData.ingredient9} {props.randomData.measure9}
              </div>
              <div>
                {props.randomData.ingredient10} {props.randomData.measure10}
              </div>
            </div>
            <div className="Cocktail-instructions">
              {props.randomData.instructions}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RandomData;
