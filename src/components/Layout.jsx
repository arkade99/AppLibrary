import React from "react";
import { Header } from "./Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { TodoApp } from "./TodoApp";
import { Form } from "./Form";
import { FormYup } from "./Form/FormYup";
import { ReducerHookUseApp } from "./ReducerHookUseApp";
import { CustomHookUseAPP } from "./CustomHookUseAPP";
import { PracticeApp } from "./PracticeApp";
import { InfiniteScroll } from "./InfiniteScroll";
import { Day30Challenges } from "./Day30Challenges";

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
        <Route path="/PracticeApp" element={<PracticeApp />} />
        <Route path="/infiniteScroll" element={<InfiniteScroll />} />
        <Route path="/day-30-Challenges" element={<Day30Challenges />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Layout;
