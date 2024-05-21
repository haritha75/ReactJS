import { useReducer } from "react";

// useReducer hook is a advance function of managing state instread of useState hook.

// useing reducer  functions all the possible state updates we can update in one function. no need to use different components.
function reducer(state, action) {
  // it will take current state and perform action
  console.log(state, action);
  // it print 0,1 because current state is 0 and action(means we are setting dispatch) is 1 so curstate+action it print next state
  // return state + action;

  switch (action.type) {
    case "inc":
      return { ...state, count: state.count + state.step };
    case "dec":
      return { ...state, count: state.count - state.step };
    case "setCount":
      return { ...state, count: action.payload };
    case "setStep":
      return { ...state, step: action.payload };
    case "reset":
      // return initialState; // we can use like this as well
      return { count: 0, step: 1 }; //here we are reseting at the same by using useReducer hook in normally we cannot do like this
    default:
      throw new Error(" Unknown action");
  }
}
function DateCounter() {
  // to update state use dispatch
  const initialState = { count: 0, step: 1 };
  const [state, dispatch] = useReducer(reducer, initialState);
  const { count, step } = state;

  // This mutates the date object.
  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + count);

  const dec = function () {
    dispatch({ type: "dec" }); //this will be going to the action into reducer function
  };

  const inc = function () {
    dispatch({ type: "inc" }); //this will be going to the action into reducer function
  };

  const defineCount = function (e) {
    dispatch({ type: "setCount", payload: Number(e.target.value) });
  };

  const defineStep = function (e) {
    dispatch({ type: "setStep", payload: Number(e.target.value) });
  };

  const reset = function () {
    dispatch({ type: "reset" });
  };

  return (
    <div className="counter">
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={defineStep}
        />
        <span>{step}</span>
      </div>

      <div>
        <button onClick={dec}>-</button>
        <input value={count} onChange={defineCount} />
        <button onClick={inc}>+</button>
      </div>

      <p>{date.toDateString()}</p>

      <div>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
export default DateCounter;
