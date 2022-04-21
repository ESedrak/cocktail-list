import React from "react";

function Sours() {
  return (
    <div className="Sours">
      <div className="image">
        <img
          className="image__drink"
          src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/032/375/original/Sours.jpg?1650511064"
          alt="Sour"
        />
        <div className="image__overlay">
          <div className="image__title">
            <h2>Sours</h2>
          </div>
          <ul className="image__description">
            <li>60mls of Whisky or Amaretto</li>
            <li>30mls of Freshly Squeezed Lemon Juice</li>
            <li>1 Egg White</li>
            <li>15mls of Simple Syrup</li>
          </ul>
          <p>
            <span className="process">
              Shake ingredients with ice and pour into a whisky glass
            </span>
          </p>
          <p>
            <span className="optional_topping">
              <strong> Optional: </strong>
              <br />
              <em>If using Whisky:</em>
              <br />
              Float a Dry Red Wine on top to make a New York Sour
              <br />
              <br />
              <em>If using Amaretto:</em>
              <br />
              Add a glazé cherry for garnish
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Sours;
