/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const Finish = ({ points, totalPoints, highscore, dispatch }) => {
  const percentage = (points / totalPoints) * 100;
  let emogi;
  if (percentage === 100) emogi = "🥇";

  if (percentage >= 80 && percentage < 100) emogi = "🎉";
  if (percentage >= 50 && percentage < 80) emogi = "😃";
  if (percentage >= 0 && percentage < 50) emogi = "😟";
  if (percentage === 0) emogi = "🤦‍♀️";

  return (
    <>
      <p className="result">
        {emogi} Your scored <strong>{points}</strong> out of{" "}
        <strong>{totalPoints}</strong> and {""}
        {Math.ceil(percentage)} %
      </p>
      <p className="highscore">high score is {highscore}</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart Quiz
      </button>
    </>
  );
};

export default Finish;
