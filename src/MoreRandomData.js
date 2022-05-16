import React from "react";

const MoreRandomData = (props) => {
  console.log(props.randomData);
  return (
    <div className="MoreRandomData">
      <h2>{props.randomData.name}</h2>
    </div>
  );
};

export default MoreRandomData;
