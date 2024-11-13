import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Hello from "./components/Hello";
import Fruits from "./components/Fruits";
import ConditionalComponent from "./components/ConditionalComponent";
import Counter from "./components/Counter";
import Form from "./components/Form";

//grandparent component passing data to the child component through the parent component

function App() {
  const person = {
    name: "Benard",
    message: "Have a blessed day!",
    seatNumbers: [1, 6, 9],
  };

  const fruits = [
    {
      name: "Apple",
      price: "10",
      emoji: "🍎",
      soldOut: false,
    },
    {
      name: "Mango",
      price: "15",
      emoji: "🥭",
      soldOut: true,
    },
    {
      name: "Banana",
      price: "20",
      emoji: "🍌",
      soldOut: true,
    },
    {
      name: "Orange",
      price: "5",
      emoji: "🍊",
      soldOut: true,
    },
  ];
  return (
    <div>
      <Hello person={person} />
      <Fruits fruits={fruits} />
      <ConditionalComponent />
      <Counter />
      <Form />
    </div>
  );
}

export default App;
