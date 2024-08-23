import { useReducer } from "react";

const initialState = { count: 0, step: 1 };

function reducer(state, action) {
  console.log(state, action);
  if (action.type == "inc") {
    return { ...state, count: state.count + state.step };
  }
  if (action.type == "dec") {
    return { ...state, count: state.count - state.step };
  }
  if (action.type == "setCount") {
    return { ...state, count: action.payload };
  }
  if (action.type == "setStep") {
    return { ...state, step: action.payload };
  }
  if (action.type == "reset") {
    return initialState;
  }
}

const DateCounter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  // const { count, step } = state;
  let date = new Date();
  date.setDate(date.getDate() + state.count);
  //   let formatedDate = date.toDateString();

  const defineStep = (e) => {
    dispatch({ type: "setStep", payload: Number(e.target.value) });
  };
  const defineCount = (e) => {
    dispatch({ type: "setCount", payload: Number(e.target.value) });
  };
  const inc = () => {
    dispatch({ type: "inc", payload: 1 });
  };
  const dec = () => {
    dispatch({ type: "dec", payload: -1 });
  };
  const reset = () => {
    dispatch({ type: "reset" });
  };
  return (
    <div className="counter">
      <div>
        <input
          type="range"
          min={0}
          max={10}
          value={state.step}
          onChange={defineStep}
        />
        <span>{state.step}</span>
      </div>

      <div>
        <button onClick={dec}> - </button>
        <input type="Number" value={state.count} onChange={defineCount} />
        <button onClick={inc}> + </button>
      </div>
      <p>{date.toDateString()}</p>
      <div>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
};
export default DateCounter;
