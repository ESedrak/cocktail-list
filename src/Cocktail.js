import React from "react";

function Cocktail() {
  return (
    <div className="Cocktail">
      <h1>Liz's Cocktail List</h1>
      <p>
        <strong>
          <em>Below are the perfected ratios of some of the best cocktails</em>
        </strong>
      </p>
      <hr />
      <div>
        <div class="image">
          <img
            class="image__drink"
            src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/023/000/original/french-75-cocktail.jpg?1639738210"
            alt="French75"
          />
          <div class="image__overlay">
            <div class="image__title">
              <h2>French 75</h2>
            </div>
            <ul class="image__description">
              <li>45mls of Gin or Brandy</li>
              <li>30mls of Cointreau</li>
              <li>30mls of Freshly Squeezed Lime Juice</li>
              <li>15mls of Simple Syrup</li>
            </ul>
            <p>
              <span class="process">
                Shake ingredients with ice, strain into a champagne glass and
                top up with Prosecco
              </span>
            </p>
          </div>
        </div>

        <div class="image">
          <img
            class="image__drink"
            src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/022/999/original/Whiskey_Sour_Served_Up.jpg?1639734669"
            alt="Sour"
          />
          <div class="image__overlay">
            <div class="image__title">
              <h2>Sours</h2>
            </div>
            <ul class="image__description">
              <li>60mls of Whisky or Amaretto</li>
              <li>30mls of Freshly Squeezed Lemon Juice</li>
              <li>1 Egg White</li>
              <li>15mls of Simple Syrup</li>
            </ul>
            <p>
              <span class="process">
                Shake ingredients with ice and pour into a whisky glass
              </span>
            </p>
            <p>
              <span class="optional_topping">
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

        <div class="image">
          <img
            class="image__drink"
            src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/023/002/original/Tommys_Margarita_Background_2x.png?1639738631"
            alt="Tommy"
          />
          <div class="image__overlay">
            <div class="image__title">
              <h2>Tommy's Margarita</h2>
            </div>
            <ul class="image__description">
              <li>90mls of Tequila</li>
              <li>40mls of Freshly Squeezed Lime Juice</li>
              <li>15mls of Agave Syrup or 15mls Cointreau</li>
            </ul>
            <p>
              <span class="process">
                Shake ingredients with ice and pour into a glass rimmed with
                salt
              </span>
            </p>
            <p>
              <span class="optional_topping">
                <strong> Optional: </strong>
                <br />
                Blend with ice to make a frozen Margarita
              </span>
            </p>
          </div>
        </div>

        <div class="image">
          <img
            class="image__drink"
            src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/023/057/original/Gin__opt__aboutcom__coeus__resources__content_migration__liquor__2019__09__18090535__Gin-and-Tonic-720x720-recipe-c2e32c4cf53c4ed7a4de20af8e862a12.jpg?1639808717"
            alt="GinTonic"
          />
          <div class="image__overlay">
            <div class="image__title">
              <h2>Gin and Tonic</h2>
            </div>
            <ul class="image__description">
              <li>60mls of Gin</li>
              <li>30mls of Freshly Squeezed Lime Juice</li>
              <li>15mls of Cointreau</li>
              <li>15mls of Simple Syrup</li>
              <li>200mls of Tonic Water</li>
            </ul>
            <p>
              <span class="process"> Shake ingredients with ice </span>
            </p>
            <p>
              <span class="optional_topping">
                <strong> Optional: </strong>
                <br />
                Cover an orange slice in sugar, flame it and then add it to the
                drink
                <br />
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cocktail;
