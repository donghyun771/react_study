// 인터페이스로 정의하는 방법
interface TodoViewProps {
  id: number;
  name: string;
  onDelete: (id: number) => void;
}

function Modify(props: TodoViewProps) {
  return (
    <div>
      {/* 문자열은 화면에 바로 출력 가능함 */}
      {props.name}
      <button onClick={() => props.onDelete(props.id)}>삭제</button>
    </div>
  );
}

export default Modify;
