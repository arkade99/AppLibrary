import { useState } from "react";
import {
  CounterApp,
  CounterAppReducer,
  CounterClassComponentApp,
} from "./CounterApp/CounterApp";
import "./style.css";
import { Clock } from "./Clock";

export const TextToDisplay = ({ children }) => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <button className="show-button" onClick={() => setShow(true)}>
        Show
      </button>
      <button className="hide-button" onClick={() => setShow(false)}>
        Hide
      </button>
      <div style={show == false ? { display: "none" } : { display: "block" }}>
        {children}
      </div>
    </div>
  );
};

export const Day30Challenges = () => {
  return (
    <div className="page">
      <div className="head-with-time">
        <h2 className="challenge-heading">Day 30 Challenges</h2>
        <div>
          <Clock />
        </div>
      </div>
      <div className="main-body-top">
        <div className="main-body">
          <h2>Counter App</h2>
          <TextToDisplay>
            <>
              <CounterApp />
              <CounterAppReducer />
            </>
          </TextToDisplay>
        </div>
        <div className="main-body">
          <h2>Counter App Using Class Component</h2>
          <TextToDisplay>
            <>
              <CounterClassComponentApp />
            </>
          </TextToDisplay>
        </div>
      </div>
    </div>
  );
};
