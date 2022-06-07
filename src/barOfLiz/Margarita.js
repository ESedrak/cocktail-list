import React from "react";
import frozenMarga from "../images/FrozenMarga.jpg";

function Margarita() {
  return (
    <div className="Margarita">
      <section className="Cocktail-one">
        <img
          className="Cocktail-image-drink"
          src={frozenMarga}
          alt="Frozen Marga"
          width="560px"
          height="560px"
        />
        <div className="Cocktail-image-overlay">
          <h2 className="Cocktail-drink-name">Tommy's Margarita</h2>
          <div className="Cocktail-process">
            <ul className="Cocktail-ingredients" role="presentation">
              <li>90mls Tequila</li>
              <li>45mls Freshly Squeezed Lime Juice</li>
              <li>15mls Cointreau</li>
              <li>15mls Agave Syrup</li>
            </ul>
            <p className="Cocktail-instructions">
              Shake ingredients with ice and pour into a glass rimmed with salt
            </p>
            <p className="Cocktail-optional-topping">
              <strong> Optional: </strong>
              <br />
              Blend with ice to make a frozen Margarita
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Margarita;
