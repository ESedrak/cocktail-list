import React from "react";
import "./Cocktail.css";
import French75 from "./French75";
import Margarita from "./Margarita";
import Sours from "./Sours";
import Gnt from "./Gnt";
import ScreamingB from "./ScreamingB";
import Genie from "./Genie";

function Cocktail() {
  return (
    <div className="Cocktail">
      <French75 />
      <Sours />
      <Margarita />
      <Gnt />
      <ScreamingB />
      <Genie />
    </div>
  );
}

export default Cocktail;
