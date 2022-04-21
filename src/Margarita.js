import React from "react";

function Margarita() {
  return (
    <div className="Margarita">
      <div className="image">
        <img
          className="image__drink"
          src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/023/002/original/Tommys_Margarita_Background_2x.png?1639738631"
          alt="Tommy"
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
