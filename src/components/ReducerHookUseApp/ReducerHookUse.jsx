import { useReducer } from "react";

const initialstate = 0;
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      console.log(action.type, state, typeof state);
      return state + 1;
    case "decrement":
      console.log(action.type, state);
      return state - 1;
    default:
      return state;
  }
};
// const reducer = (state, action) => {
//Avoiding Switch case
//   console.log(action.type);
//   if (action.type === "increment") {
//     return state + 1;
//   } else if (action.type === "decrement") {
//     return state - 1;
//   }
//   return state;
// };
export const ReducerHookUseApp = () => {
  const [state, despatch] = useReducer(reducer, initialstate);
  return (
    <>
      <h1>ReducerHookUseApp Count: {state}</h1>
      <button
        onClick={() => {
          despatch({ type: "increment" });
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          despatch({ type: "decrement" });
        }}
      >
        Decrement
      </button>
    </>
  );
};
