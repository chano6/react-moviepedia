import { useEffect, useRef, useState } from "react";

const FileInput = ({ name, value, onChange }) => {
  // 실제 DOM 노드를 직접 참조 가능
  // DOM 노드는 렌더링이 끝나야 생겨서 Ref 객체의 current 값도 렌더링이 끝나야 생김
  const inputRef = useRef();
  const [preview, setPreview] = useState();

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

  useEffect(() => {
    if (!value) return;

    // Object URL 생성 (문자열 return)
    // Object URL을 만들면 웹 브라우저는 메모리를 할당하고 파일에 해당하는 주소를 만들어준다.
    const nextPreview = URL.createObjectURL(value);
    setPreview(nextPreview);

    // 사이드이펙트 정리
    return () => {
      setPreview();
      // revokeObjectURL : 생성한 ObjdectURL 해제
      URL.revokeObjectURL(nextPreview);
    };
  }, [value]);

  return (
    <div>
      <img src={preview} alt="이미지 미리보기" />
      <input
        type="file"
        accept="image/png, image/jpeg"
        onChange={handleChange}
        ref={inputRef}
      />
      {value && <button onClick={handleClearClick}>X</button>}
    </div>
  );
};

export default FileInput;
