import React, { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import TodoSort from "./TodoSort";
import uuid from "react-uuid";

function TodoController({ todos, setTodos }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [deadline, setDeadline] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");
  const [sortedTodo, setSortedTodo] = useState(todos);

  // 제목
  const onChangeTitleHandler = (event) => setTitle(event.target.value);
  // 내용
  const onChangeContentHandler = (event) => setContent(event.target.value);
  // 마감일
  const onChangeDeadlineHandler = (event) => setDeadline(event.target.value);
  // 정렬
  const onChangeSortOrderHandler = (event) => setSortOrder(event.target.value);

  // 추가하기 버튼
  const clickAddBtn = (event) => {
    event.preventDefault(); // 페이지 리로드 방지

    // 유효성 검사
    if (!title.trim()) {
      alert("제목을 입력하세요.");
      return;
    } else if (title && !content.trim()) {
      alert("내용을 입력하세요.");
      return;
    } else if (!deadline) {
      alert("마감일을 입력하세요.");
    } else {
      const newTodo = {
        id: uuid(),
        title,
        content,
        deadline,
        isDone: false,
      };

      setTodos([...sortedTodo, newTodo]);
      setSortedTodo([...sortedTodo, newTodo]);
      setTitle("");
      setContent("");
      setDeadline("");
    }
  };

  // 정렬하기
  const sortTodos = () => {
    const sortedTodos = [...todos].sort((a, b) => {
      const deadlineA = new Date(a.deadline);
      const deadlineB = new Date(b.deadline);

      if (sortOrder === "asc") {
        return deadlineA - deadlineB;
      } else {
        return deadlineB - deadlineA;
      }
    });

    setTodos(sortedTodos);
    setSortedTodo(sortedTodos);
  };

  // 삭제하기 버튼
  const clickDeleteBtn = (id) => {
    const checkDelete = window.confirm("정말 삭제하시겠습니까?");
    if (checkDelete) {
      const remainTodo = sortedTodo.filter((todo) => todo.id !== id);
      setTodos(remainTodo);
      setSortedTodo(remainTodo);
    } else return;
  };

  // 완료 버튼 - isDone : false -> true
  // 취소 버튼 - isDone : true -> false
  const clickUpdateBtn = (id) => {
    const updateTodo = sortedTodo.filter((todo) => {
      if (todo.id === id) {
        todo.isDone = !todo.isDone;
      }
      return todo;
    });
    setTodos(updateTodo);
    setSortedTodo(updateTodo);
  };

  const workingTodos = sortedTodo.filter((todo) => !todo.isDone);
  const doneTodos = sortedTodo.filter((todo) => todo.isDone);

  return (
    <main>
      <TodoForm
        title={title}
        content={content}
        deadline={deadline}
        onChangeTitleHandler={onChangeTitleHandler}
        onChangeContentHandler={onChangeContentHandler}
        onChangeDeadlineHandler={onChangeDeadlineHandler}
        clickAddBtn={clickAddBtn}
      />
      <TodoSort
        sortOrder={sortOrder}
        sortTodos={sortTodos}
        onChangeSortOrderHandler={onChangeSortOrderHandler}
      />
      <TodoList
        headTitle="Working..🔥"
        todos={workingTodos}
        clickDeleteBtn={clickDeleteBtn}
        clickUpdateBtn={clickUpdateBtn}
      />
      <TodoList
        headTitle="Done..!🎉"
        todos={doneTodos}
        clickDeleteBtn={clickDeleteBtn}
        clickUpdateBtn={clickUpdateBtn}
      />
    </main>
  );
}

export default TodoController;
