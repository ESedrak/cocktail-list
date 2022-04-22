import React from "react";

function Margarita() {
  return (
    <div className="Margarita">
      <section className="one-cocktail">
        <img
          className="image-drink"
          src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/032/374/original/Magharita.jpg?1650510966"
          alt="Magharita"
        />
        <div className="image-overlay">
          <h2 className="drink-name">Tommy's Margarita</h2>
          <ul className="image-description">
            <li>90mls of Tequila</li>
            <li>40mls of Freshly Squeezed Lime Juice</li>
            <li>15mls of Agave Syrup or 15mls Cointreau</li>
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
