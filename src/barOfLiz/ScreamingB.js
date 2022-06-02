import React from "react";
import screamImg from "../images/screamingBitch.jpg";

function ScreamingB() {
  return (
    <div className="ScreamingB">
      <section className="Cocktail-one">
        <img
          className="Cocktail-image-drink"
          src={screamImg}
          alt="Screaming B cocktail"
        />
        <div className="Cocktail-image-overlay">
          <h2 className="Cocktail-drink-name">Screaming Bitch</h2>
          <div className="Cocktail-process">
            <ul className="Cocktail-ingredients" role="presentation">
              <li>45mls of Gin Shiraz</li>
              <li>30mls of Cointreau</li>
              <li>200mls of Tonic water</li>
              <li>15mls of Simple Syrup</li>
            </ul>
            <p className="Cocktail-instructions">
              Shake ingredients with ice, blend the drink until it explodes(and
              it will), strain into a cup
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ScreamingB;
