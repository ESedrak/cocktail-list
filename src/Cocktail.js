import React from "react";
import "./Cocktail.css";
import French75 from "./French75";
import Margarita from "./Margarita";
import Sours from "./Sours";
import Gnt from "./Gnt";

function Cocktail() {
  return (
    <div className="Cocktail">
      <h1>Liz's Cocktail List</h1>
      <p>
        <strong>
          <em>Below are the perfected ratios of some of the best cocktails</em>
        </strong>
      </p>
      <hr />
      <French75 />
      <Sours />
      <Margarita />
      <Gnt />
    </div>
  );
}

export default Cocktail;
