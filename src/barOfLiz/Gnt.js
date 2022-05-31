import React from "react";
import gntImage from "../images/GnT.png";

function Gnt() {
  return (
    <div className="Gnt">
      <section className="Cocktail-one">
        <img
          className="Cocktail-image-drink"
          src={gntImage}
          alt="Gin and Tonic"
        />
        <div className="Cocktail-image-overlay">
          <h2 className="Cocktail-drink-name">Gin and Tonic</h2>
          <ul className="Cocktail-ingredients">
            <li>60mls of Gin</li>
            <li>30mls of Freshly Squeezed Lime Juice</li>
            <li>15mls of Cointreau</li>
            <li>15mls of Simple Syrup</li>
            <li>200mls of Tonic Water</li>
          </ul>
          <p className="Cocktail-process">Shake ingredients with ice</p>
          <p className="Cocktail-optional-topping">
            <strong> Optional: </strong>
            <br />
            Cover an orange slice in sugar, flame it and then add it to the
            drink
            <br />
          </p>
        </div>
      </section>
    </div>
  );
}

export default Gnt;