import { useState } from "react";

function counter() {
  const [count, setCount] = useState(0);
  const incrementCount = () => {
    setCount(count + 1);
  };
  const decrementCount = () => {
    setCount(count - 1);
  };
  return (
    <>
      <h1>Using State hook</h1>
      <p>Count:{count}</p>
      <button onClick={incrementCount}>+</button>
      <button onClick={decrementCount}>-</button>
    </>
  );
}

export default counter;
