import { useEffect, useState } from "react";

export const FormYup = () => {
  const [inputName, setInputName] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputVal, setInputVal] = useState({ name: "", email: "" });
  const handelSubmit = (e: any) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(inputEmail)) {
      alert("Invalid email");
    } else {
      setInputVal({ name: inputName, email: inputEmail });
    }
  };

  useEffect(() => {
    console.log(inputVal);
  }, [inputVal]);

  return (
    <form onSubmit={handelSubmit}>
      <h2 style={{ marginBottom: 30, background: "#ffffcc" }}>Form yup</h2>
      <label>
        Name:{" "}
        <input
          name="Name"
          type="text"
          onChange={(e) => {
            setInputName(e.target.value);
          }}
        />
      </label>
      <label>
        Email:{" "}
        <input
          name="Email"
          type="text"
          onChange={(e) => {
            setInputEmail(e.target.value);
          }}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};
