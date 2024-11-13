import React from "react";
import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const [incrementBy, setIncrementBy] = useState(1);

  function increaseCount() {
    setCount(count + incrementBy);
  }

  function decreaseCount() {
    count > 0
      ? setCount(count - incrementBy)
      : alert("Come on man! The Count is already at zero");
  }

  function resetCount() {
    setCount(0);
  }

  function increaseIncrementValue() {
    setIncrementBy(incrementBy + 1);
  }

  function decreaseIncrementValue() {
    incrementBy > 1
      ? setIncrementBy(incrementBy - 1)
      : alert("Increment value cannot be less than 1");
  }

  return (
    <div>
      <h1>
        Number of Counts is: <span style={{ color: "Blue" }}>{count}</span>{" "}
      </h1>
      <button onClick={increaseCount}>Increase Count</button>
      <button onClick={decreaseCount}>Decrease count</button>
      <button onClick={resetCount}>Reset Count</button>
      <h2>We are incrementing/Decrementing the count by: {incrementBy} </h2>
      <button onClick={increaseIncrementValue}>Increase Increment Value</button>
      <button onClick={decreaseIncrementValue}>Decrease Increment Value</button>
    </div>
  );
}
