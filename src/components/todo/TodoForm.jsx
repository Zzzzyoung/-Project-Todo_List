import React from "react";

function TodoForm({
  title,
  onChangeTitleHandler,
  content,
  onChangeContentHandler,
  clickAddBtn,
  deadline,
  onChangeDeadlineHandler,
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
          autoFocus
        />
        내용
        <input
          type="text"
          value={content}
          placeholder="내용을 입력하세요."
          onChange={onChangeContentHandler}
        />
        마감일
        <input
          type="date"
          value={deadline}
          onChange={onChangeDeadlineHandler}
        />
      </div>
      <button type="submit" className="add-btn" onClick={clickAddBtn}>
        추가하기
      </button>
    </form>
  );
}

export default TodoForm;
