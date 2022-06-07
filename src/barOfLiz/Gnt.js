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
          width="560px"
          height="560px"
        />
        <div className="Cocktail-image-overlay">
          <h2 className="Cocktail-drink-name">Gin and Tonic</h2>
          <div className="Cocktail-process">
            <ul className="Cocktail-ingredients" role="presentation">
              <li>60mls Gin</li>
              <li>30mls Freshly Squeezed Lime Juice</li>
              <li>15mls Cointreau</li>
              <li>15mls Simple Syrup</li>
              <li>200mlsf Tonic Water</li>
            </ul>
            <p className="Cocktail-instructions">Shake ingredients with ice</p>
            <p className="Cocktail-optional-topping">
              <strong> Optional: </strong>
              <br />
              Cover an orange slice in sugar, flame it and then add it to the
              drink
              <br />
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Gnt;
