import { useReducer } from "react";

export const PracticeApp = () => {
  const initialState = 0;
  const ReducerFunction = (state, action) => {
    console.log(action.type);
    if (action.type === "increment") {
      return state + 1;
    } else if (action.type === "decrement") {
      return state - 1;
    }
    return state;
  };
  const [state, dispatch] = useReducer(ReducerFunction, initialState);
  console.log(state);
  return (
    <>
      <h1>PracticeApp</h1>
      <p>Useful for Practieceing concepts</p>
      <h2>Current Count: {state}</h2>
      <button
        onClick={() => {
          dispatch({ type: "increment" });
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch({ type: "decrement" });
        }}
      >
        Decrement
      </button>
      {/* <InfiniteScroll /> */}

      <CounterWithRef />
      <CounterWithState />
    </>
  );
};

import { useRef } from "react";

export const CounterWithRef = () => {
  const countRef = useRef(0);

  const handleClick = () => {
    countRef.current += 1; // Does NOT cause re-render
    console.log("Current count:", countRef.current);
  };

  console.log("Rendered with useRef");

  return (
    <>
      <h3>Check console for count</h3>
      <h3>Count: {countRef.current}</h3>
      <button onClick={handleClick}>Increment</button>
    </>
  );
};

import { useState } from "react";

export const CounterWithState = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1); // Causes component to re-render
  };

  console.log("Rendered with useState");

  return (
    <>
      <h3>Count: {count}</h3>
      <button onClick={handleClick}>Increment</button>
    </>
  );
};
