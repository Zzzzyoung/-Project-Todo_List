import { Link } from "react-router-dom";
import styled from "styled-components";

export const Layout = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  min-width: 800px;
`;

export const StHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  height: 20px;
  font-size: 17px;
  background-color: #003049;
  color: white;
`;

export const SubmitContainer = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px auto;
  padding: 20px;
  height: 30px;
  max-width: 1000px;
  min-width: 800px;
  border: 1px solid;
  border-radius: 15px;
  border-color: transparent;
  font-size: 18px;
  font-weight: 700;
  background-color: #669bbc;
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const Input = styled.input`
  height: 20px;
  border-radius: 5px;
  border-color: transparent;
`;

export const AddBtn = styled.button`
  padding: 5px 8px;
  border-color: transparent;
  border-radius: 10px;
  font-size: 15px;
  background-color: #0230499f;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #003049;
    color: white;
  }
`;

export const SelectBtn = styled.select`
  width: 85px;
  height: 23px;
  margin-top: 30px;
  margin-left: 20px;
  cursor: pointer;
`;

export const ListContainer = styled.section`
  margin: 20px auto 50px auto;
  padding: 0 20px;
`;

export const StTodoList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
`;

export const TodoItemLink = styled(Link)`
  text-decoration-line: none;
  color: black;
  cursor: pointer;
`;

export const StTodoItem = styled.li`
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: 200px;
  border: 1px solid;
  border-radius: 15px;
  border-color: saddlebrown;
  background-color: #fdf0d5;
  color: black;
  box-shadow: 3px 3px 10px gray;
  list-style-type: none;
`;

export const TodoContent = styled.div`
  gap: 10px;
`;

export const TodoOnlyContent = styled.p`
  text-decoration: ${(props) => (props.$done ? "line-through" : "none")};
`;

export const TodoDeadline = styled.time`
  font-size: 13px;
`;

export const BtnSet = styled.div`
  display: flex;
  gap: 10px;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 30px;
`;

export const DeleteBrn = styled.button`
  padding: 0px 10px;
  height: 30px;
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

export const UpdateBtn = styled.button`
  padding: 0px 10px;
  height: 30px;
  font-size: 15px;
  border: 1px solid;
  border-radius: 5px;
  border-color: transparent;
  background-color: rgba(56, 176, 0, 0.5);
  cursor: pointer;

  &:hover {
    background-color: #38b000;
    color: white;
  }
`;

export const StFooter = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
`;
