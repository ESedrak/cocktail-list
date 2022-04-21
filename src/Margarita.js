import React from "react";

function Margarita() {
  return (
    <div className="Margarita">
      <div className="image">
        <img
          className="image__drink"
          src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/032/374/original/Magharita.jpg?1650510966"
          alt="Magharita"
        />
        <div className="image__overlay">
          <div className="image__title">
            <h2>Tommy's Margarita</h2>
          </div>
          <ul className="image__description">
            <li>90mls of Tequila</li>
            <li>40mls of Freshly Squeezed Lime Juice</li>
            <li>15mls of Agave Syrup or 15mls Cointreau</li>
          </ul>
          <p>
            <span className="process">
              Shake ingredients with ice and pour into a glass rimmed with salt
            </span>
          </p>
          <p>
            <span className="optional_topping">
              <strong> Optional: </strong>
              <br />
              Blend with ice to make a frozen Margarita
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Margarita;
