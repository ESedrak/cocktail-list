import React from "react";
import "./Cocktail.css";
import French75 from "./French75";
import Margarita from "./Margarita";
import Sours from "./Sours";
import Gnt from "./Gnt";
import ScreamingB from "./ScreamingB";
import Genie from "./Genie";
import useCocktailApi from "./hooks/useCocktailApi";

function Cocktail() {
  return (
    <div className="Cocktail">
      <h2>Bar of Liz</h2>
      <p>The perfected ratios of some of the best cocktails</p>
      <Margarita />
      <Sours />
      <Gnt />
      <Genie />
      <French75 />
      <ScreamingB />
    </div>
  );
}

export default Cocktail;
