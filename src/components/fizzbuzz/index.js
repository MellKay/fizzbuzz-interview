import React, { useState } from "react";

export function fizzbuzz(integer) {
  if (integer % 3 === 0 && integer % 5 === 0) {
    return "fizzbuzz";
  } else if (integer % 5 === 0) {
    return "buzz";
  } else if (integer % 3 === 0) {
    return "fizz";
  } else {
    return integer;
  }
}

export default function FizzComponent() {
  const [number, setNumber] = useState(0);

  function handleAddClick() {
    setNumber(number + 1);
  }
  function handleMinusClick() {
    setNumber(number - 1);
  }

  return (
    <div>
      <button onClick={handleAddClick}> + </button>
      <button onClick={handleMinusClick}> - </button>
      <p>{fizzbuzz(number)}</p>
    </div>
  );
}
