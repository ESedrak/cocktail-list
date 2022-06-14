import React from "react";
import "./Spinner.css";
import { TailSpin } from "react-loader-spinner";

function Spinner() {
  return (
    <div className="Spinner">
      <TailSpin
        height="100"
        width="100"
        color="rgb(255, 209, 217)"
        ariaLabel="loading"
      />
    </div>
  );
}

export default Spinner;
