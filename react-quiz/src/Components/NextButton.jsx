/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
const NextButton = ({ dispatch, answer, index, numQuestions }) => {
  console.log("index", index, " num question", numQuestions);
  if (answer === null) return null;

  if (index < numQuestions - 1) {
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "nextQuestion" })}
      >
        Next
      </button>
    );
  }

  if (index === numQuestions - 1) {
    return (
      <button
        onClick={() => dispatch({ type: "finish" })}
        className="btn btn-ui"
      >
        Finish
      </button>
    );
  }
};

export default NextButton;
