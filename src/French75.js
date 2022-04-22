import React from "react";

function French75() {
  return (
    <div className="French75">
      <section className="one-cocktail">
        <img
          className="image-drink"
          src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/023/000/original/french-75-cocktail.jpg?1639738210"
          alt="French75"
        />
        <div className="image-overlay">
          <div className="image-title">
            <h2 className="drink-name">French 75</h2>
          </div>
          <ul className="image-description">
            <li>45mls of Gin or Brandy</li>
            <li>30mls of Cointreau</li>
            <li>30mls of Freshly Squeezed Lime Juice</li>
            <li>15mls of Simple Syrup</li>
          </ul>
          <p>
            <span className="process">
              Shake ingredients with ice, strain into a champagne glass and top
              up with Prosecco
            </span>
          </p>
        </div>
      </section>
    </div>
  );
}

export default French75;
