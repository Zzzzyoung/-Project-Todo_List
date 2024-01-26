import React from "react";
import TodoItem from "./TodoItem";

function TodoList({ headTitle, todos, clickDeleteBtn, clickUpdateBtn }) {
  return (
    <section className="list-container">
      <h2>{headTitle}</h2>
      <ul className="todo-list">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            clickDeleteBtn={clickDeleteBtn}
            clickUpdateBtn={clickUpdateBtn}
          />
        ))}
      </ul>
    </section>
  );
}

export default TodoList;
