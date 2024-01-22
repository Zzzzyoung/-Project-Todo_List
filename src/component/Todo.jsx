import React from "react";

function Todo({ todo, todos, setTodos }) {
  // 삭제하기 버튼
  const clickDeleteBtn = (id) => {
    const remainTodo = todos.filter((todo) => todo.id !== id);
    setTodos(remainTodo);
  };

  // 완료 버튼 - isDone : false -> true
  // 취소 버튼 - isDone : true -> false
  const clickUpdateBtn = (id) => {
    const updateTodo = todos.filter((todo) => {
      if (todo.id === id) {
        todo.isDone = !todo.isDone;
      }
      return todo;
    });
    setTodos(updateTodo);
  };

  return (
    <li className="todo-item" key={todo.id}>
      <h3>{todo.title}</h3>
      <p>{todo.content}</p>
      <div className="btn-set">
        <button className="delete-btn" onClick={() => clickDeleteBtn(todo.id)}>
          삭제하기
        </button>
        {todo.isDone ? (
          <button
            className="cancel-btn"
            onClick={() => clickUpdateBtn(todo.id)}
          >
            취소
          </button>
        ) : (
          <button
            className="complete-btn"
            onClick={() => clickUpdateBtn(todo.id)}
          >
            완료
          </button>
        )}
      </div>
    </li>
  );
}

export default Todo;
