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
    </>
  );
};
