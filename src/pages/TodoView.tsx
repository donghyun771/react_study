import React, { useState } from "react";
import Home from "./Home";

type TodoViewProps = { name: string };

function TodoView(props: TodoViewProps) {
  // const [count, setCount] = useState(0);

  // console.log("props:", props.name);

  return (
    <div>
      <div>
        {/* <textarea value={props.name}></textarea> */}
        {props.name}
      </div>
    </div>
  );
}

export default TodoView;
