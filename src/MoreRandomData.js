import React from "react";

const MoreRandomData = (props) => {
  console.log(props.randomData);
  return (
    <div className="MoreRandomData">
      <h1>{props.randomData.strDrink}</h1>;
    </div>
  );
};

export default MoreRandomData;
