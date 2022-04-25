import React from "react";
import sourImg from "./images/SoursCropped.png";

function Sours() {
  return (
    <div className="Sours">
      <section className="one-cocktail">
        <img className="image-drink" src={sourImg} alt="Sour" />
        <div className="image-overlay">
          <h2 className="drink-name">Sours</h2>
          <ul className="ingredients">
            <li>60mls of Whisky or Amaretto</li>
            <li>30mls of Freshly Squeezed Lemon Juice</li>
            <li>1 Egg White</li>
            <li>15mls of Simple Syrup</li>
          </ul>
          <p className="process">
            Shake ingredients with ice and pour into a whisky glass
          </p>
          <div className="optional-topping">
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
      </section>
    </div>
  );
}

export default Sours;
