/* eslint-disable react/prop-types */
const Progress = ({ index, points, numQuestions, totalPoints, answer }) => {
  return (
    <header className="progress">
      <progress max={numQuestions} value={index + Number(answer !== null)} />
      <p>
        {" "}
        Question <strong>{index}</strong> /{numQuestions}{" "}
      </p>
      <p>
        {points}/{totalPoints} points
      </p>
    </header>
  );
};

export default Progress;
