import React from "react";
import sourImg from "../images/Sours.png";

function Sours() {
  return (
    <div className="Sours">
      <section className="Cocktail-one">
        <img
          className="Cocktail-image-drink"
          src={sourImg}
          alt="Sour Cocktail"
          width="560px"
          height="560px"
        />
        <div className="Cocktail-image-overlay">
          <h2 className="Cocktail-drink-name">Sours</h2>
          <div className="Cocktail-process">
            <ul className="Cocktail-ingredients" role="presentation">
              <li>60mls Whisky or Amaretto</li>
              <li>30mls Freshly Squeezed Lemon Juice</li>
              <li>1 Egg White</li>
              <li>15mls Simple Syrup</li>
            </ul>
            <p className="Cocktail-instructions">
              Shake ingredients with ice and pour into a whisky glass
            </p>
            <div className="Cocktail-optional-topping">
              <strong> Optional: </strong>
              <div>
                <em>If using Whisky:</em>
                <br />
                Float a Dry Red Wine on top to make a New York Sour
              </div>
              <br />
              <div>
                <em>If using Amaretto:</em>
                <br />
                Add a glazé cherry for garnish
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Sours;
