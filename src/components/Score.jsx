import React from "react";
import ReactDOM from "react-dom";
function Score(props) {
  return (
    <div className="score">
      <h1>Score: {props.score}</h1>
    </div>
  );
}
export default Score;
