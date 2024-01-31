import React from "react";
import {
  StTodoItem,
  TodoContent,
  TodoOnlyContent,
  TodoDeadline,
  BtnSet,
  DeleteBrn,
  UpdateBtn,
} from "../../Style";

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
    <StTodoItem key={todo.id}>
      <article>
        <TodoContent>
          <h3>{todo.title}</h3>
          <TodoOnlyContent isDone={todo.isDone}>{todo.content}</TodoOnlyContent>
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
  );
}

export default TodoItem;
