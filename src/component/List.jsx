import React from "react";
import Todo from "./Todo";

function List({ todos, setTodos }) {
  return (
    <div className="list-container">
      <div className="list-wrapper">
        <h2>Working..🔥</h2>
        <ul className="todo-list">
          {todos.map((todo) => {
            if (todo.isDone === false) {
              return <Todo todo={todo} todos={todos} setTodos={setTodos} />;
            } else {
              return null;
            }
          })}
        </ul>
      </div>

      <div className="list-wrapper">
        <h2>Done..!🎉</h2>
        <ul className="todo-list">
          {todos.map((todo) => {
            if (todo.isDone === true) {
              return <Todo todo={todo} todos={todos} setTodos={setTodos} />;
            } else {
              return null;
            }
          })}
        </ul>
      </div>
    </div>
  );
}

export default List;
