import React from "react";
import TodoItem from "./TodoItem";
import { ListContainer, StTodoList } from "../../Style";

function TodoList({ headTitle, todos, clickDeleteBtn, clickUpdateBtn }) {
  return (
    <ListContainer>
      <h2>{headTitle}</h2>
      <StTodoList>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            clickDeleteBtn={clickDeleteBtn}
            clickUpdateBtn={clickUpdateBtn}
          />
        ))}
      </StTodoList>
    </ListContainer>
  );
}

export default TodoList;
