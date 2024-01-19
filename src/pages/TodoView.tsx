import React, { useState } from 'react';
import Home from './Home';

function TodoView(props: any) {

  const [count, setCount] = useState(0);

  // console.log("props:", props.name); 

  return (
    <div>
      <div>
      <textarea value={props.name}></textarea>
      </div>
    </div>  
  );
}

export default TodoView;
