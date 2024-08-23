/* eslint-disable react/prop-types */
const StartScreen = ({ totalQuestions, dispatch }) => {
  return (
    <div className="start">
      <h2>welcome to the react quiz</h2>
      <h3> {totalQuestions} questions to test your reacr mastery</h3>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "start" })}
      >
        Let us start
      </button>
    </div>
  );
};

export default StartScreen;
