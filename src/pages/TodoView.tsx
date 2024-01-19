// 컴포넌트에서 받을 인자를 타입으로 정의
type TodoViewProps = { name: string };

// 인터페이스로 정의하는 방법
// interface TodoViewProps {
//   name: string;
// }

function TodoView(props: TodoViewProps) {
  return (
    <div>
      {/* 문자열은 화면에 바로 출력 가능함 */}
      {props.name}
    </div>
  );
}

export default TodoView;
