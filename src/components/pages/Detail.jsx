import React, { useState } from "react";
import { TodoOnlyContent } from "../../Style";
import { formattedDeadline } from "../../util/Date";
import { Link, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

function Detail({ todos, setTodos }) {
  const { id } = useParams();
  const [isEditing, setIsEditing] = useState(false);
  const [editedTextArea, setEditedTextArea] = useState("");
  const navigate = useNavigate();

  const { title, content, deadline, isDone } = todos.find(
    (todo) => todo.id === id
  );

  // 수정하기
  const clickEditDoneBtn = () => {
    if (!editedTextArea) {
      return alert("수정된 부분이 없습니다.");
    }

    const checkEdit = window.confirm("수정하시겠습니까?");
    if (checkEdit) {
      const editedTodos = todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, content: editedTextArea };
        } else {
          return todo;
        }
      });

      setTodos(editedTodos);
      setIsEditing(false);
      setEditedTextArea("");
    }
  };

  // 삭제하기
  const clickDeleteBtn = () => {
    const checkDelete = window.confirm("정말 삭제하시겠습니까?");
    if (checkDelete) {
      const remainTodos = todos.filter((todo) => todo.id !== id);
      navigate("/");
      setTodos(remainTodos);
    } else return;
  };

  return (
    <DetailContainer>
      <Link to="/">
        <HomeBtn>
          <button>홈으로</button>
        </HomeBtn>
      </Link>

      <DetailTodoItem key={id}>
        {isEditing ? (
          <>
            <DetailTodoContent>
              <h3>{title}</h3>
              <TodoOnlyEditContent
                $done={isDone ? "true" : undefined}
                defaultValue={content}
                autoFocus
                onChange={(event) => setEditedTextArea(event.target.value)}
              />
              <br />
              <DetailTodoDeadline>
                {formattedDeadline(deadline)}
                까지
              </DetailTodoDeadline>
            </DetailTodoContent>
            <DetailBtnSet>
              <EditBtn onClick={clickEditDoneBtn}>수정 완료</EditBtn>
              <CancelBtn onClick={() => setIsEditing(false)}>취소</CancelBtn>
            </DetailBtnSet>
          </>
        ) : (
          <>
            <DetailTodoContent>
              <h3>{title}</h3>
              <TodoOnlyContent $done={isDone ? "true" : undefined}>
                {content}
              </TodoOnlyContent>
              <DetailTodoDeadline>
                {formattedDeadline(deadline)}
                까지
              </DetailTodoDeadline>
            </DetailTodoContent>
            <DetailBtnSet>
              <EditBtn onClick={() => setIsEditing(true)}>수정</EditBtn>
              <DeleteBtn onClick={clickDeleteBtn}>삭제</DeleteBtn>
            </DetailBtnSet>
          </>
        )}
      </DetailTodoItem>
    </DetailContainer>
  );
}

export default Detail;

const DetailContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const HomeBtn = styled.div`
  position: absolute;
  top: 50px;
  left: 70px;

  & button {
    padding: 2px 13px;
    height: 40px;
    border-color: transparent;
    border-radius: 5px;
    font-size: 15px;
    background-color: #003049;
    color: white;
    cursor: pointer;

    &:hover {
      background-color: #0230499f;
      color: white;
    }
  }
`;

const DetailTodoItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px 60px;
  width: 350px;
  height: 300px;
  border: 1px solid saddlebrown;
  border-radius: 15px;
  background-color: #fdf0d5;
  color: black;
  box-shadow: 3px 3px 10px gray;

  & h3 {
    font-size: 36px;
    margin-top: 0px;
  }
`;

const DetailTodoContent = styled.div`
  gap: 10px;
  font-size: 24px;
  margin-bottom: 10px;
`;

const TodoOnlyEditContent = styled.textarea`
  width: 340px;
  font-size: 24px;
  resize: none;
`;

const DetailTodoDeadline = styled.time`
  font-size: 18px;
`;

const DetailBtnSet = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 25px;
  margin-top: 30px;
`;

const EditBtn = styled.button`
  padding: 2px 13px;
  height: 40px;
  font-size: 15px;
  border: 1px solid;
  border-radius: 5px;
  border-color: transparent;
  background-color: #40a2e390;
  cursor: pointer;

  &:hover {
    background-color: #40a2e3;
    color: white;
  }
`;

const DeleteBtn = styled.button`
  padding: 2px 13px;
  height: 40px;
  font-size: 15px;
  border: 1px solid;
  border-radius: 5px;
  border-color: transparent;
  background-color: rgba(239, 35, 60, 0.5);
  cursor: pointer;

  &:hover {
    background-color: #ef233c;
    color: white;
  }
`;

const CancelBtn = styled.button`
  padding: 2px 13px;
  height: 40px;
  font-size: 15px;
  border: 1px solid;
  border-radius: 5px;
  border-color: transparent;
  background-color: #ff9bd292;
  cursor: pointer;

  &:hover {
    background-color: #ff9bd2;
    color: white;
  }
`;
