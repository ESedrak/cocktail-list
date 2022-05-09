import React from "react";

function MoreResults(props) {
  //  console.log(props.results) to see data passed through from component More
  console.log(props.results);
  if (props.results) {
    return (
      <div className="Results">
        {props.results.map((name, index) => {
          return <h2 key={index}>{name.strDrink}</h2>;
        })}
      </div>
    );
  } else {
    return null;
  }
}

export default MoreResults;
