import React from "react";
import Fruit from "./Fruit";

//parent component accessing data from the grandparent component (App.jsx) and passing it to the child component (Fruit.jsx)
export default function Fruits(props) {
  //const fruits = ["apple", "banana", "mango", "passion", "pineapple"];

  return (
    <ul>
      {props.fruits.map((fruit) => (
        <Fruit
          key={fruit.name}
          name={fruit.name}
          emoji={fruit.emoji}
          price={fruit.price}
          soldOut={fruit.soldOut}
        />
      ))}
    </ul>
  );
}
