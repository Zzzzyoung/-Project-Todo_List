import React from "react";

function TodoForm({
  title,
  onChangeTitleHandler,
  content,
  onChangeContentHandler,
  clickAddBtn,
}) {
  return (
    <form className="submit-container">
      <div className="input-container">
        제목
        <input
          type="text"
          value={title}
          placeholder="제목을 입력하세요."
          onChange={onChangeTitleHandler}
        />
        내용
        <input
          type="text"
          value={content}
          placeholder="내용을 입력하세요."
          onChange={onChangeContentHandler}
        />
      </div>
      <button type="submit" className="add-btn" onClick={clickAddBtn}>
        추가하기
      </button>
    </form>
  );
}

export default TodoForm;
