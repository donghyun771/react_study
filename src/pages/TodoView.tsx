// 컴포넌트에서 받을 인자를 타입으로 정의
// type TodoViewProps = { name: string };

import { useState } from "react";

// 인터페이스로 정의하는 방법
interface TodoViewProps {
  id: number;
  name: string;
  isEditable?: boolean;
  onModify: (id: number) => void;
  onDelete: (id: number) => void;
  onSave: (id: number, data: string) => void;
}

function TodoView(props: TodoViewProps) {
  const [todoContent, setTodoContent] = useState("");

  return (
    <div>
      {/* 문자열은 화면에 바로 출력 가능함 */}
      {props.isEditable ? (
        <input
          defaultValue={props.name}
          onChange={(e) => {
            setTodoContent(e.target.value);
          }}
        />
      ) : (
        props.name
      )}
      {props.isEditable == true ? (
        <button onClick={() => props.onSave(props.id, todoContent)}>
          저장
        </button>
      ) : (
        <button onClick={() => props.onDelete(props.id)}>삭제</button>
      )}

      <button onClick={() => props.onModify(props.id)}>수정</button>
    </div>
  );
}

export default TodoView;
