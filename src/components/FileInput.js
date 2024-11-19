import { useEffect, useRef } from "react";

const FileInput = ({ name, value, onChange }) => {
  // 실제 DOM 노드를 직접 참조 가능
  // DOM 노드는 렌더링이 끝나야 생겨서 Ref 객체의 current 값도 렌더링이 끝나야 생김
  const inputRef = useRef();

  const handleChange = (e) => {
    const nextValue = e.target.files[0];
    onChange(name, nextValue);
  };

  const handleClearClick = () => {
    const inputNode = inputRef.current;

    if (!inputNode) return;

    inputNode.value = "";
    onChange(name, null);
  };

  return (
    <div>
      <input type="file" onChange={handleChange} ref={inputRef} />
      {value && <button onClick={handleClearClick}>X</button>}
    </div>
  );
};

export default FileInput;
