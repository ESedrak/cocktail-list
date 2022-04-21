import React from "react";

function ScreamingB() {
  return (
    <div className="ScreamingB">
      <div className="image">
        <img
          className="image__drink"
          src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/032/373/original/ScreamingB.jpg?1650510876"
          alt="ScreamingB"
        />
        <div className="image__overlay">
          <div className="image__title">
            <h2>Screaming Bitch</h2>
          </div>
          <ul className="image__description">
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
      </div>
    </div>
  );
}

export default ScreamingB;
