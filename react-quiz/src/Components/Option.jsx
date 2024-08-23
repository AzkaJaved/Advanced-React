/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

const Option = ({ question, answer, dispatch }) => {
  const hasAnswered = answer !== null;
  return (
    <div className="options">
      {question.options.map((option, index) => (
        <button
          disabled={hasAnswered}
          className={`btn btn-option ${
            hasAnswered
              ? question.correctOption == index
                ? "correct"
                : "wrong"
              : ""
          }  ${index === answer ? "answer" : ""}`}
          key={option}
          onClick={() => dispatch({ type: "newAnswer", payload: index })}
        >
          {option}
        </button>
      ))}
      {/* {answer !== null && (
        <button
          className="btn btn-next"
          onClick={() => dispatch({ type: "nextQuestion" })}
        >
          Next
        </button>
      )} */}
    </div>
  );
};

export default Option;
