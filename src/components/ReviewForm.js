import { useState } from "react";

const ReviewForm = () => {
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState(0);
  const [content, setContent] = useState("");

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleRatingChange = (e) => {
    // 입력 값이 숫자가 아닌 경우 처리
    const nextRating = Number(e.target.value) || 0;
    setRating(nextRating);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleSubmit = (e) => {
    // 기본 동작 제한
    e.preventDefault();
    console.log(title, rating, content);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={title} onChange={handleTitleChange} />
      <input type="number" value={rating} onChange={handleRatingChange} />
      <textarea value={content} onChange={handleContentChange} />
      <button type="submit">확인</button>
    </form>
  );
};

export default ReviewForm;
