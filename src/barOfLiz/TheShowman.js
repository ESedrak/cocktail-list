import React from "react";
import showmanImg from "../images/theShowman.jpg";

function TheShowman() {
  return (
    <div className="TheShowman">
      <section className="Cocktail-one">
        <img
          className="Cocktail-image-drink"
          src={showmanImg}
          alt="The showmnan cocktail"
          width="560px"
          height="560px"
        />
        <div className="Cocktail-image-overlay">
          <h2 className="Cocktail-drink-name">The Showman</h2>
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

export default TheShowman;
