import React from "react";
import {
  StTodoItem,
  TodoContent,
  TodoOnlyContent,
  TodoDeadline,
  BtnSet,
  DeleteBrn,
  UpdateBtn,
  TodoItemLink,
} from "../../Style";
import { Link } from "react-router-dom";

function TodoItem({ todo, clickDeleteBtn, clickUpdateBtn }) {
  const formattedDeadline = new Date(todo.deadline).toLocaleDateString(
    "ko-KR",
    {
      year: "numeric",
      month: "long",
      day: "numeric",
      weekday: "long",
    }
  );

  return (
    <TodoItemLink to={`/detail/${todo.id}`}>
      <StTodoItem key={todo.id}>
        <article>
          <TodoContent>
            <h3>{todo.title}</h3>
            <TodoOnlyContent $done={todo.isDone ? "true" : undefined}>
              {todo.content}
            </TodoOnlyContent>
            <TodoDeadline>
              {formattedDeadline}
              까지
            </TodoDeadline>
          </TodoContent>

          <BtnSet>
            <DeleteBrn onClick={() => clickDeleteBtn(todo.id)}>
              삭제하기
            </DeleteBrn>
            <UpdateBtn onClick={() => clickUpdateBtn(todo.id)}>
              {todo.isDone ? "취소" : "완료"}
            </UpdateBtn>
          </BtnSet>
        </article>
      </StTodoItem>
    </TodoItemLink>
  );
}

export default TodoItem;
