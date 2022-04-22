import React from "react";

function ScreamingB() {
  return (
    <div className="ScreamingB">
      <section className="one-cocktail">
        <img
          className="image-drink"
          src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/032/373/original/ScreamingB.jpg?1650510876"
          alt="ScreamingB"
        />
        <div className="image-overlay">
          <div className="image-title">
            <h2 className="drink-name">Screaming Bitch</h2>
          </div>
          <ul className="image-description">
            <li>45mls of Gin Shiraz</li>
            <li>30mls of Cointreau</li>
            <li>200mls of Tonic water</li>
            <li>15mls of Simple Syrup</li>
          </ul>
          <p>
            <span className="process">
              Shake ingredients with ice, blend the drink until it explodes(and
              it will), strain into a cup
            </span>
          </p>
        </div>
      </section>
    </div>
  );
}

export default ScreamingB;
