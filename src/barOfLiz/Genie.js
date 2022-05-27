import React from "react";
import BlueGenie from "../images/BlueGenie.jpg";

function Genie() {
  return (
    <div className="Genie">
      <section className="Cocktail-one">
        <img
          className="Cocktail-image-drink"
          src={BlueGenie}
          alt="Blue Gin Secret"
        />
        <div className="Cocktail-image-overlay">
          <h2 className="Cocktail-drink-name">Blue Genie</h2>
          <ul className="Cocktail-image-description">
            <li> ???</li>
            <li>???</li>
            <li>???</li>
            <li>60mls of Gin</li>
          </ul>
          <p className="Cocktail-process">A secret blue drink</p>
        </div>
      </section>
    </div>
  );
}

export default Genie;
