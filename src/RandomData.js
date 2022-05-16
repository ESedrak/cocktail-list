import React from "react";
import "./RandomData.css";
import "./Cocktail.css";

const RandomData = (props) => {
  // console.log(props.randomData) to get data from MoreRandom component
  return (
    <div className="RandomData">
      <section className="Cocktail-one">
        <img
          src={props.randomData.image}
          alt={props.randomData.id}
          className="Cocktail-image-drink"
        ></img>
        <div className="Cocktail-image-overlay">
          <h2 className="Cocktail-drink-name">{props.randomData.name}</h2>
          <div>
            <strong>{props.randomData.ingredient1}</strong>{" "}
            <em> {props.randomData.measure1}</em>
          </div>
          <div>
            <strong>{props.randomData.ingredient2}</strong>{" "}
            <em>{props.randomData.measure2}</em>
          </div>
          <div>
            <strong>{props.randomData.ingredient3}</strong>{" "}
            <em>{props.randomData.measure3}</em>
          </div>
          <div>
            <strong>{props.randomData.ingredient4}</strong>{" "}
            <em> {props.randomData.measure4}</em>
          </div>
          <div>
            <strong>{props.randomData.ingredient5}</strong>{" "}
            <em>{props.randomData.measure5}</em>
          </div>
          <div>
            <strong>{props.randomData.ingredient6} </strong>
            <em>{props.randomData.measure6}</em>
          </div>
          <div>
            <strong>{props.randomData.ingredient7} </strong>
            <em>{props.randomData.measure7}</em>
          </div>
          <div>
            <strong>{props.randomData.ingredient8}</strong>{" "}
            <em> {props.randomData.measure8}</em>
          </div>
          <div>
            <strong> {props.randomData.ingredient9}</strong>
            <em> {props.randomData.measure9}</em>
          </div>
          <div className="RandomData-instructions">
            {props.randomData.instructions}
          </div>
        </div>
      </section>
    </div>
  );
};

export default RandomData;
