import React from "react";
import "./Header.css"; // Make sure this CSS file is imported

export const Header = () => {
  return (
    <header className="header-container">
      <nav className="nav-section primary-nav">
        <a href="/todo">📝 Todo App</a>
        <a href="/form">📄 Form App</a>
        <a href="/formyup">✅ Form App (Yup)</a>
        <a href="/reducerHookUseApp">🔁 Reducer Hook</a>
        <a href="/customHookUseAPP">🧩 Custom Hook</a>
        <a href="/infiniteScroll">🔄 Infinite Scroll</a>
      </nav>
      <nav className="nav-section secondary-nav">
        <a href="/PracticeApp">🎯 Want To Practice?</a>
        <a href="/day-30-challenges">🔥 Day 30 Challenges</a>
      </nav>
    </header>
  );
};
