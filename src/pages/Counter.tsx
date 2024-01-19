import React, { useState } from "react";
import "../style/Counter.css";

function Counter() {
  const [count, setCount] = useState(0);

  console.log("count:", count);

  return (
    <div>
      <button onClick={() => setCount(count + 1)} className="button">
        UP
      </button>
      <button onClick={() => setCount(count - 1)} className="button">
        DOWN
      </button>
      <div>{count}</div>
    </div>
  );
}

export default Counter;
