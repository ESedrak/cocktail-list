import React from "react";

function French75() {
  return (
    <div className="French75">
      <section className="Cocktail-one">
        <img
          className="Cocktail-image-drink"
          src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/023/000/original/french-75-cocktail.jpg?1639738210"
          alt="French75"
        />
        <div className="Cocktail-image-overlay">
          <h2 className="Cocktail-drink-name">French 75</h2>
          <ul className="Cocktail-image-description">
            <li>45mls of Gin or Brandy</li>
            <li>30mls of Cointreau</li>
            <li>30mls of Freshly Squeezed Lemon Juice</li>
            <li>15mls of Simple Syrup</li>
          </ul>
          <p className="Cocktail-process">
            Shake ingredients with ice, strain into a champagne glass and top up
            with Prosecco
          </p>
        </div>
      </section>
    </div>
  );
}

export default French75;
