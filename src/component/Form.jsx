import React, { useState } from "react";

function Form({ todos, setTodos }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  // 제목
  const onChangeTitleHAndler = (event) => setTitle(event.target.value);
  // 내용
  const onChangeContentHAndler = (event) => setContent(event.target.value);

  // 추가하기 버튼
  const clickAddBtn = (event) => {
    // 유효성 검사
    if (!title.trim()) {
      alert("제목을 입력하세요.");
      return;
    } else if (title && !content.trim()) {
      alert("내용을 입력하세요.");
      return;
    }

    const newTodo = {
      id: todos.length + 1,
      title,
      content,
      isDone: false,
    };

    setTodos([...todos, newTodo]);
    setTitle("");
    setContent("");
    event.preventDefault(); // 페이지 리로드 방지
  };

  return (
    <form className="submit-container">
      <div className="input-container">
        제목
        <input type="text" value={title} onChange={onChangeTitleHAndler} />
        내용
        <input type="text" value={content} onChange={onChangeContentHAndler} />
      </div>
      <button className="add-btn" onClick={clickAddBtn}>
        추가하기
      </button>
    </form>
  );
}

export default Form;
