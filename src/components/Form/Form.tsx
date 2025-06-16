import React, { useState } from "react";

export const Form = () => {
  const [inputName, setinputName] = useState("");
  const [inputEmail, setinputEmail] = useState("");
  const [inputVal, setInputVal] = useState({ name: "", email: "" });
  const handelSubmit = (e) => {
    e.preventDefault();
    console.log(inputName);
    console.log(inputEmail);
    setInputVal({ name: inputName, email: inputEmail });
  };
  console.log("inputVal", inputVal);
  return (
    <>
      <form onSubmit={handelSubmit}>
        <label>
          Name
          <input
            name="name"
            type="text"
            onChange={(e) => setinputName(e.target.value)}
          />
        </label>
        <label>
          Email
          <input
            name="name"
            type="text"
            onChange={(e) => setinputEmail(e.target.value)}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};
