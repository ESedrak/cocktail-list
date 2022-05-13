import React from "react";

const MoreRandom = () => {
  const randomCocktail = (e) => {
    e.preventDefault();
  };

  return (
    <div className="MoreRandom">
      <button className="MoreRandom Button" onChange={randomCocktail}>
        Random Cocktail
      </button>
    </div>
  );
};

export default MoreRandom;
