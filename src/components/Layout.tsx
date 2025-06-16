import React from "react";
import { Header } from "./Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { TodoApp } from "./TodoApp";
import { Form } from "./Form";

const Layout = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/todo" element={<TodoApp />} />
        <Route path="/form" element={<Form />} />
      </Routes>
      <h2>Body</h2>
    </BrowserRouter>
  );
};

export default Layout;
