import React from "react";

function Gnt() {
  return (
    <div className="Gnt">
      <section className="one-cocktail">
        <img
          className="image-drink"
          src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/023/057/original/Gin__opt__aboutcom__coeus__resources__content_migration__liquor__2019__09__18090535__Gin-and-Tonic-720x720-recipe-c2e32c4cf53c4ed7a4de20af8e862a12.jpg?1639808717"
          alt="GinTonic"
        />
        <div className="image-overlay">
          <div className="image-title">
            <h2 className="drink-name">Gin and Tonic</h2>
          </div>
          <ul className="image-description">
            <li>60mls of Gin</li>
            <li>30mls of Freshly Squeezed Lime Juice</li>
            <li>15mls of Cointreau</li>
            <li>15mls of Simple Syrup</li>
            <li>200mls of Tonic Water</li>
          </ul>
          <p>
            <span className="process"> Shake ingredients with ice </span>
          </p>
          <p>
            <span className="optional-topping">
              <strong> Optional: </strong>
              <br />
              Cover an orange slice in sugar, flame it and then add it to the
              drink
              <br />
            </span>
          </p>
        </div>
      </section>
    </div>
  );
}

export default Gnt;
