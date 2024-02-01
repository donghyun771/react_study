import TodoView from "./TodoView";
import { useCallback, useState } from "react";

interface TodoProps {
  id: number;
  name: string;
}

function Home() {
  const [todoContent, setTodoContent] = useState("");
  // const [todoView, setTodoView] = useState<string[]>([]);
  const [todoView, setTodoView] = useState<TodoProps[]>([]);

  const addTodoView = useCallback(() => {

    const todo = [...todoView]

    // console.log(todo[todo.length-1].id + 1)

    // 이전 상태값과 현재 입력값을 합친 배열을 set
    if (todoView.length === 0) {
      setTodoView([...todoView , {id : 1, name : todoContent}]);
    } else {
      setTodoView([...todoView , {id : todo[todo.length-1].id + 1, name : todoContent}]);
    }
    // 입력 필드 비우기
    setTodoContent("");
  }, [todoContent, todoView]);

  const todoDelete = useCallback((id: number) => {
    const deleted = todoView.filter((todo) => (
        todo.id !== id
    ))
    setTodoView(deleted)

  }, [todoView])

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
          if (todoContent === "") {
            alert("내용이 없습니다.")
          }else {
            addTodoView();
          }
        }}
      >
        확인
      </button>
      <br />
      {/* map메소드로 데이터 배열을 돌면서 데이터를 화면에 출력함 */}
      {todoView.map((todo) => (
        <TodoView key={todo.id} id={todo.id} name={todo.name} 
          onDelete={todoDelete}
        />
      ))}
    </div>
  );
}

export default Home;
