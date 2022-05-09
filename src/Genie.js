import React from "react";
import BlueGenie from "./images/BlueGenie.jpg";

function Genie() {
  return (
    <div className="Genie">
      <section className="one-cocktail">
        <img className="image-drink" src={BlueGenie} alt="French75" />
        <div className="image-overlay">
          <h2 className="drink-name">Blue Genie</h2>
          <ul className="image-description">
            <li> ???</li>
            <li>???</li>
            <li>???</li>
            <li>60mls of Gin</li>
          </ul>
          <p className="process">A secret blue drink</p>
        </div>
      </section>
    </div>
  );
}

export default Genie;
