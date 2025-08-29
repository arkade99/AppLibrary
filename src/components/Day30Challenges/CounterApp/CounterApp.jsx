import { Component, useReducer, useRef, useState } from "react";

export const CounterApp = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="counter-block">
      <h4>Counter app UseState</h4>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <p>Current Count {count}</p>
      <CounterAppRef />
    </div>
  );
};

export const CounterAppRef = () => {
  const countRef = useRef(0);
  const handelClick = (type) => {
    type === "Increment" ? (countRef.current += 1) : (countRef.current -= 1);
    console.log(countRef.current);
  };
  return (
    <div className="counter-block">
      <h4>Counter app UseRef</h4>
      <button onClick={() => handelClick("Increment")}>Increment</button>
      <button onClick={() => handelClick("Decrement")}>Decrement</button>
      <p>Current Value {countRef.current}</p>
    </div>
  );
};

export const CounterAppReducer = () => {
  const ReducerCounter = (CounterState, despatch) => {
    // Apply ternary Operator in else if format
    return despatch.type === "Increment"
      ? CounterState + 1
      : despatch.type === "Decrement"
      ? CounterState - 1
      : CounterState;
  };
  const InitialCounterState = 0;
  const [CounterState, despatch] = useReducer(
    ReducerCounter,
    InitialCounterState
  );
  console.log("CounterState:    ", CounterState);
  return (
    <div className="counter-block">
      <h4>Counter app UseReducer</h4>
      <button onClick={() => despatch({ type: "Increment" })}>Increment</button>
      <button onClick={() => despatch({ type: "Decrement" })}>Decrement</button>
      <p>Result: {CounterState}</p>
    </div>
  );
};

export class CounterClassComponentApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  handelIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };
  handelDecrement = () => {
    this.setState({ count: this.state.count - 1 });
  };
  render() {
    return (
      <div className="counter-block">
        <h4>Counter app Class Component</h4>
        <button onClick={this.handelIncrement}>Increment</button>
        <button onClick={this.handelDecrement}>Decrement</button>
        <p>Current Count:{this.state.count} </p>
      </div>
    );
  }
}
