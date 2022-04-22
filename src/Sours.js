import React from "react";

function Sours() {
  return (
    <div className="Sours">
      <section className="one-cocktail">
        <img
          className="image-drink"
          src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/032/375/original/Sours.jpg?1650511064"
          alt="Sour"
        />
        <div className="image-overlay">
          <h2 className="drink-name">Sours</h2>
          <ul className="image-description">
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
            <section>
              <em>If using Whisky:</em>
              <br />
              Float a Dry Red Wine on top to make a New York Sour
            </section>
            <section>
              <em>If using Amaretto:</em>
              <br />
              Add a glazé cherry for garnish
            </section>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Sours;
