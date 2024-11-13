import React from "react";
//child component accessing data from the parent component {Fruits} through props
export default function Fruit({ emoji, name, price, soldOut }) {
  // const { emoji, name, price } = props; props destructuring
  return (
    <>
      {price > 5 ? (
        <li>
          {emoji} {name} {price} {soldOut ? "Out of Stock" : "Available"}
        </li>
      ) : (
        ""
      )}
    </>
  );
}
