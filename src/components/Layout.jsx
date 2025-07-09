import React from "react";
import { Header } from "./Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { TodoApp } from "./TodoApp";
import { Form } from "./Form";
import { FormYup } from "./Form/FormYup";
import { ReducerHookUseApp } from "./ReducerHookUseApp";
import { CustomHookUseAPP } from "./CustomHookUseAPP";

const Layout = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/todo" element={<TodoApp />} />
        <Route path="/form" element={<Form />} />
        <Route path="/formyup" element={<FormYup />} />
        <Route path="/reducerHookUseApp" element={<ReducerHookUseApp />} />
        <Route path="/customHookUseAPP" element={<CustomHookUseAPP />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Layout;
