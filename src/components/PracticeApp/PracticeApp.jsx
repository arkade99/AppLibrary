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

      {/* <CounterWithRef />
      <CounterWithState /> */}
      <ChipsInput />
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

//import React, { useState } from "react";
//import "./styles.css";
function ChipsInput() {
  const [value, setValue] = useState("");
  const [chips, setChips] = useState([]);
  console.log("value", value);
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      setChips([...chips, value]);
    }
  };
  console.log("abc", chips);
  const handleClick = (x) => {
    setChips(chips.filter((item) => item !== x));
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          margin: "40px 0",
        }}
      >
        <h2>Chips Input</h2>
        <input
          type="text"
          placeholder="Type a chip and press tag"
          style={{ padding: "8px", width: "200px" }}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={handleKeyDown}
        />
      </div>
      <div
        style={{
          display: "flex",
          gap: "8px",
          flexWrap: "wrap",
          marginBottom: "10px",
        }}
      >
        {chips.map((item, idx) => (
          <span
            key={idx}
            style={{
              padding: "6px 10px",
              borderRadius: "20px",
              background: "white",
              color: "black",
              fontSize: "14px",
            }}
          >
            {item}
            <button
              onClick={() => {
                handleClick(item);
              }}
            >
              X
            </button>
          </span>
        ))}
      </div>
    </>
  );
}

export default ChipsInput;
