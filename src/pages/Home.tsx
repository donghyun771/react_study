import TodoView from "./TodoView";
import { useCallback, useState } from "react";

function Home() {
  const [todoContent, setTodoContent] = useState("");
  const [todoView, setTodoView] = useState<string[]>([]);

  const addTodoView = useCallback(() => {
    setTodoView([...todoView, todoContent]);
    setTodoContent("");
  }, [todoContent, todoView]);

  return (
    <div>
      <textarea
        name="todo"
        id="todoContent"
        value={todoContent}
        onChange={(e) => {
          setTodoContent(e.target.value);
        }}
      />
      <br />
      <button
        onClick={() => {
          addTodoView();
        }}
      >
        확인
      </button>
      <br />
      {todoView.map((todo) => (
        <TodoView name={todo} key={todo} />
      ))}
    </div>
  );
}

export default Home;
