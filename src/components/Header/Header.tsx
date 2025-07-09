import React from "react";

export const Header = () => {
  return (
    <div style={{ padding: 20, marginBottom: 30, background: "#00ffcc" }}>
      <a style={{ paddingRight: 15 }} href="/todo">
        Todo App
      </a>
      <a style={{ paddingRight: 15 }} href="/form">
        Form App
      </a>
      <a style={{ paddingRight: 15 }} href="/formyup">
        Form App(yup)
      </a>
      <a style={{ paddingRight: 15 }} href="/reducerHookUseApp">
        ReducerHookUseApp
      </a>
      <a style={{ paddingRight: 15 }} href="/customHookUseAPP">
        CustomHookUseAPP
      </a>
    </div>
  );
};
