import React from "react";
import screamBImg from "./images/ScreamingB.jpg";

function ScreamingB() {
  return (
    <div className="ScreamingB">
      <section className="one-cocktail">
        <img className="image-drink" src={screamBImg} alt="ScreamingB" />
        <div className="image-overlay">
          <h2 className="drink-name">Screaming Bitch</h2>
          <ul className="image-description">
            <li>45mls of Gin Shiraz</li>
            <li>30mls of Cointreau</li>
            <li>200mls of Tonic water</li>
            <li>15mls of Simple Syrup</li>
          </ul>
          <p className="process">
            Shake ingredients with ice, blend the drink until it explodes(and it
            will), strain into a cup
          </p>
        </div>
      </section>
    </div>
  );
}

export default ScreamingB;
