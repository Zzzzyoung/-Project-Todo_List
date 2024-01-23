import React from "react";

function TodoItem({ todo, clickDeleteBtn, clickUpdateBtn }) {
  return (
    <li className="todo-item" key={todo.id}>
      <h3>{todo.title}</h3>
      <p>{todo.content}</p>
      <div className="btn-set">
        <button className="delete-btn" onClick={() => clickDeleteBtn(todo.id)}>
          삭제하기
        </button>
        <button className="update-btn" onClick={() => clickUpdateBtn(todo.id)}>
          {todo.isDone ? "취소" : "완료"}
        </button>
      </div>
    </li>
  );
}

export default TodoItem;
