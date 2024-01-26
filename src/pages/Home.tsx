import TodoView from "./TodoView";
import { useCallback, useState } from "react";

function Home() {
  const [todoContent, setTodoContent] = useState("");
  const [todoView, setTodoView] = useState<string[]>([]);

  const addTodoView = useCallback(() => {
    // 이전 상태값과 현재 입력값을 합친 배열을 set
    setTodoView([...todoView, todoContent]);
    // 입력 필드 비우기
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
      {/* map메소드로 데이터 배열을 돌면서 데이터를 화면에 출력함 */}
      {todoView.map((todo) => (
        <TodoView id={1} name={todo} />
      ))}
    </div>
  );
}

export default Home;
