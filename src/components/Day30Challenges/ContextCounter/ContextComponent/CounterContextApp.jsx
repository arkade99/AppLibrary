import { useContext } from "react";
import { CounterContext } from "../Context/ContextCounter";

export const CounterContextApp = () => {
  const counterState = useContext(CounterContext);
  console.log(counterState);
  return (
    <div className="counter-block">
      <h4>Counter app Context</h4>
      <button onClick={() => counterState.setCount(counterState.count + 1)}>
        Increment
      </button>
      <button onClick={() => counterState.setCount(counterState.count - 1)}>
        Decrement
      </button>
      <button onClick={() => counterState.setCount(counterState.count + 1)}>
        Increment
      </button>
      <button onClick={() => counterState.setCount(counterState.count - 1)}>
        Decrement
      </button>
      <button onClick={() => counterState.setCount(counterState.count + 1)}>
        Increment
      </button>
      <button onClick={() => counterState.setCount(counterState.count - 1)}>
        Decrement
      </button>
      <p>Current Count {counterState.count}</p>
    </div>
  );
};
