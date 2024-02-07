import React from "react";
import {
  StTodoItem,
  TodoContent,
  TodoOnlyContent,
  TodoDeadline,
  BtnSet,
  DeleteBtn,
  UpdateBtn,
  TodoItemLink,
} from "../../Style";
import { formattedDeadline } from "../../util/Date";

function TodoItem({ todo, clickDeleteBtn, clickUpdateBtn }) {
  const { id, title, content, deadline, isDone } = todo;

  return (
    <StTodoItem key={id}>
      <article>
        <TodoItemLink to={`/detail/${id}`}>
          <TodoContent>
            <h3>{title}</h3>
            <TodoOnlyContent $done={isDone ? "true" : undefined}>
              {content}
            </TodoOnlyContent>
            <TodoDeadline>
              {formattedDeadline(deadline)}
              까지
            </TodoDeadline>
          </TodoContent>
        </TodoItemLink>

        <BtnSet>
          <DeleteBtn onClick={() => clickDeleteBtn(id)}>삭제하기</DeleteBtn>
          <UpdateBtn onClick={() => clickUpdateBtn(id)}>
            {isDone ? "취소" : "완료"}
          </UpdateBtn>
        </BtnSet>
      </article>
    </StTodoItem>
  );
}

export default TodoItem;
