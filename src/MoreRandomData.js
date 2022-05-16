import React from "react";

const MoreRandomData = (props) => {
  // console.log(props.randomData) to get data from MoreRandom component
  console.log(props.randomData);
  return (
    <div className="MoreRandomData">
      <h2>{props.randomData.name}</h2>
      <img
        src={props.randomData.image}
        alt={props.randomData.id}
        width="200px"
      ></img>
      <div>
        {props.randomData.ingredient1} {props.randomData.measure1}
      </div>
      <div>
        {props.randomData.ingredient2} {props.randomData.measure2}
      </div>
      <div>
        {props.randomData.ingredient3} {props.randomData.measure3}
      </div>
      <div>
        {props.randomData.ingredient4} {props.randomData.measure4}
      </div>
      <div>
        {props.randomData.ingredient5} {props.randomData.measure5}
      </div>
      <div>
        {props.randomData.ingredient6} {props.randomData.measure6}
      </div>
      <div>
        {props.randomData.ingredient7} {props.randomData.measure7}
      </div>
      <div>
        {props.randomData.ingredient8} {props.randomData.measure8}
      </div>
      <div>
        {props.randomData.ingredient9} {props.randomData.measure9}
      </div>
      <div>{props.randomData.instructions}</div>
    </div>
  );
};

export default MoreRandomData;
