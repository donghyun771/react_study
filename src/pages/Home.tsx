import TodoView from "./TodoView";
import { Component, useState } from "react";

function Home() {
    
    const [todoContent, setTodoContent ] = useState("");
    const [todoView, setTodoView] = useState<any[]>([]);

    const addTodoView = () => {
        setTodoView(todoView.concat(<TodoView name={todoContent} />))
    }

    return (
        <div>
            <textarea 
            name="todo" 
            id="todoContent"
            value={todoContent}
            onChange={(e) => setTodoContent(e.target.value)}
            ></textarea>
            <br/>
            <button onClick={() => {
                console.log("onClick")
                addTodoView();
            }}>확인</button>
            <br/>
            {todoView}
        </div>
    )
}

export default Home;