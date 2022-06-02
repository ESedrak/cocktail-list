import React from "react";
import "./Liz.css";
import "../Cocktail.css";
import French75 from "./French75";
import Margarita from "./Margarita";
import Sours from "./Sours";
import Gnt from "./Gnt";
import ScreamingB from "./ScreamingB";
import Genie from "./Genie";

function Liz() {
  return (
    <div className="Liz">
      <div className="Liz-header">
        <h2>Bar of Liz</h2>
        <p>The perfected ratios of some of the best cocktails</p>
      </div>
      <Margarita />
      <French75 />
      <ScreamingB />
      <Sours />
      <Gnt />
      <Genie />
    </div>
  );
}

export default Liz;
