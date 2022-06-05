import React from "react";
import frenchImg from "../images/french75.jpg";

function French75() {
  return (
    <div className="French75">
      <section className="Cocktail-one">
        <img className="Cocktail-image-drink" src={frenchImg} alt="French 75" />
        <div className="Cocktail-image-overlay">
          <h2 className="Cocktail-drink-name">French 75</h2>
          <div className="Cocktail-process">
            <ul className="Cocktail-ingredients" role="presentation">
              <li>45mls Gin or Brandy</li>
              <li>30mls Cointreau</li>
              <li>30mls Freshly Squeezed Lemon Juice</li>
              <li>15mls Simple Syrup</li>
            </ul>
            <p className="Cocktail-instructions">
              Shake ingredients with ice, strain into a champagne glass and top
              up with Prosecco
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default French75;
