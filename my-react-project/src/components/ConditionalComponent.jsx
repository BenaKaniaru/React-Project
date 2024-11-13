import React from "react";
import Resilience from "./Resilience";
import Assurance from "./Assurance";

export default function ConditionalComponent({ name }) {
  const display = false;

  return (
    <div>
      {!display ? <Resilience name="Kaniaru" /> : <Assurance name="Kaniaru" />}
    </div>
  );
}
