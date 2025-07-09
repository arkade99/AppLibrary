import { useState } from "react";

const useCounter = (initialValue = 0) => {
  const [count, setCount] = useState(initialValue);
  const increment = () => {
    console.log(count, "increment");
    setCount(count + 1);
  };
  const decrement = () => {
    console.log(count, "decrement");
    setCount(count - 1);
  };
  return { count, increment, decrement };
};

export const CustomHookUseAPP = () => {
  const { count, increment, decrement } = useCounter(5);
  return (
    <>
      <h1>CustomHookUseAPP</h1>
      <h2>Count: {count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </>
  );
};
