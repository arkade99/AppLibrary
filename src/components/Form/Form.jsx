import { useEffect, useRef, useState } from "react";

export const Form = () => {
  const [inputName, setinputName] = useState("");
  const [inputEmail, setinputEmail] = useState("");
  const [inputVal, setInputVal] = useState({ name: "", email: "" });
  const handelSubmit = (e) => {
    e.preventDefault();
    console.log(inputName);
    console.log(inputEmail);
    if (!inputName || !inputEmail) {
      alert("Insert Name/ Email ");
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(inputEmail)) {
        alert("Email invalid");
      } else {
        setInputVal({ name: inputName, email: inputEmail });
        setinputName("");
        setinputEmail("");
      }
    }
  };
  useEffect(() => {
    console.log(inputVal);
  }, [inputVal]);
  return (
    <>
      <h1>Form With validation</h1>
      <form onSubmit={handelSubmit}>
        <label>
          Name
          <input
            name="name"
            type="text"
            onChange={(e) => setinputName(e.target.value)}
            value={inputName}
          />
        </label>
        <label>
          Email
          <input
            name="name"
            type="email"
            onChange={(e) => setinputEmail(e.target.value)}
            value={inputEmail}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
      <ControledForm />
      <UnControlledForm />
    </>
  );
};

export const ControledForm = () => {
  const [name, setName] = useState("");
  useEffect(() => {
    console.log("Controled Component Form Data: ", name);
  }, [name]);
  return (
    <>
      <h1>Controled Component Form </h1>
      <form>
        <label>
          Name:
          <input value={name} onChange={(e) => setName(e.target.value)} />
        </label>
      </form>
    </>
  );
};

export const UnControlledForm = () => {
  const inputName = useRef(null);
  const handelSubmit = (e) => {
    e.preventDefault();
    const namevalue = inputName.current?.value;
    console.log(namevalue);
  };
  return (
    <>
      <h1>Uncontroled Component Form </h1>
      <form onSubmit={handelSubmit}>
        <label>
          Name:
          <input ref={inputName} />
        </label>
        <button>Submit</button>
      </form>
    </>
  );
};
