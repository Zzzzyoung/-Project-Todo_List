import React from "react";
import { SubmitContainer, InputContainer, Input, AddBtn } from "../../Style";

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
    <SubmitContainer>
      <InputContainer>
        제목
        <Input
          type="text"
          value={title}
          placeholder="제목을 입력하세요."
          onChange={onChangeTitleHandler}
          autoFocus
        />
        내용
        <Input
          type="text"
          value={content}
          placeholder="내용을 입력하세요."
          onChange={onChangeContentHandler}
        />
        마감일
        <Input
          type="date"
          value={deadline}
          onChange={onChangeDeadlineHandler}
        />
      </InputContainer>
      <AddBtn type="submit" onClick={clickAddBtn}>
        추가하기
      </AddBtn>
    </SubmitContainer>
  );
}

export default TodoForm;
