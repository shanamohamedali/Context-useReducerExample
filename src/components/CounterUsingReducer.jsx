import React from "react";
import "./counter/Counter.css";
import { useReducer } from "react";
import { counterReducer } from "./CounterReducer";

export function CounterUsingReducer() {
  const [state, dispatch] = useReducer(counterReducer, { count: 0, error: "" });

  return (
    <div className="counter-container">
      <h1>Counter:{state.count}</h1>
      {state.error && <p className="error">{state.error}</p>}
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      <button onClick={() => dispatch({ type: "increment_by", payload: 5 })}>
        Increment By 5
      </button>
      <button
        onClick={() =>
          dispatch({
            type: "decrement_by",
            payload: {
              count: 3,
            },
          })
        }
      >
        Decrement By 3
      </button>
    </div>
  );
}
