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
          width="560px"
          height="560px"
        />
        <div className="Cocktail-image-overlay">
          <h2 className="Cocktail-drink-name">Screaming Bitch</h2>
          <div className="Cocktail-process">
            <ul className="Cocktail-ingredients" role="presentation">
              <li>45mls Gin Shiraz</li>
              <li>30mls Cointreau</li>
              <li>200mls Tonic water</li>
              <li>15mls Simple Syrup</li>
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
