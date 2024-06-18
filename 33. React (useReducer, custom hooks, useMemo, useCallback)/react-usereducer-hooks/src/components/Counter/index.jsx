import { useReducer } from "react";
import reducer from "./counter.reducer";
import ACTIONS from "./counter.actions";

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, { counter: 0 });

  return (
    <>
      <button onClick={() => dispatch({ type: ACTIONS.decrement })}>-</button>
      <span>{state.counter}</span>
      <button onClick={() => dispatch({ type: ACTIONS.increment })}>+</button>
      <button onClick={() => dispatch({ type: ACTIONS.reset })}>reset</button>
    </>
  );
};

export default Counter;
