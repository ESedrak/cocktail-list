import React from "react";
import frozenMarga from "./images/FrozenMarga.jpg";

function Margarita() {
  return (
    <div className="Margarita">
      <section className="Cocktail-one">
        <img
          className="Cocktail-image-drink"
          src={frozenMarga}
          alt="FrozenMarga"
        />
        <div className="Cocktail-image-overlay">
          <h2 className="Cocktail-drink-name">Tommy's Margarita</h2>
          <ul className="Cocktail-ingredients">
            <li>90mls of Tequila</li>
            <li>30mls of Freshly Squeezed Lime Juice</li>
            <li>15mls of Agave Syrup and 15mls Cointreau</li>
          </ul>
          <p className="Cocktail-process">
            Shake ingredients with ice and pour into a glass rimmed with salt
          </p>
          <p className="Cocktail-optional-topping">
            <strong> Optional: </strong>
            <br />
            Blend with ice to make a frozen Margarita
          </p>
        </div>
      </section>
    </div>
  );
}

export default Margarita;
