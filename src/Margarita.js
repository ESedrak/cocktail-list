import React from "react";
import Magharita from "./images/Margarita.jpg";
import FrozenMarga from "./images/FrozenMarga.jpg";

function Margarita() {
  return (
    <div className="Margarita">
      <section className="one-cocktail">
        <img className="image-drink" src={Magharita} alt="Magharita" />
        <img className="image-drink" src={FrozenMarga} alt="FrozenMarga" />
        <div className="image-overlay">
          <h2 className="drink-name">Tommy's Margarita</h2>
          <ul className="ingredients">
            <li>90mls of Tequila</li>
            <li>30mls of Freshly Squeezed Lime Juice</li>
            <li>15mls of Agave Syrup and 15mls Cointreau</li>
          </ul>
          <p className="process">
            Shake ingredients with ice and pour into a glass rimmed with salt
          </p>
          <p className="optional-topping">
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
