import React from "react";
import { useState } from "react";

export default function Form() {
  const [name, setName] = useState({ firstName: "", secondName: "" });
  const [email, setEmail] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    console.log(name, email);
  }

  return (
    <div>
      <form>
        <label>Enter First Name: </label>
        <input
          onChange={(e) => setName({ ...name, firstName: e.target.value })} //(...) spread operator used to combine two objects into one, allowing input of first name without interfering with whatever input is provided in the second name
          type="text"
          value={name.firstName}
        />
        <label>Enter Second Name: </label>
        <input
          onChange={(e) => setName({ ...name, secondName: e.target.value })}
          type="text"
          value={name.secondName}
        />
        <label> Enter your Email: </label>
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          value={email}
        />

        <input onClick={(e) => handleSubmit(e)} type="submit" />
      </form>
    </div>
  );
}
