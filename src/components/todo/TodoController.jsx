import React, { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

function TodoController({ todos, setTodos }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  // 제목
  const onChangeTitleHandler = (event) => setTitle(event.target.value);
  // 내용
  const onChangeContentHandler = (event) => setContent(event.target.value);

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
    } else {
      const newTodo = {
        id: todos.length + 1,
        title,
        content,
        isDone: false,
      };

      setTodos([...todos, newTodo]);
      setTitle("");
      setContent("");
    }
  };

  // 삭제하기 버튼
  const clickDeleteBtn = (id) => {
    const remainTodo = todos.filter((todo) => todo.id !== id);
    setTodos(remainTodo);
  };

  // 완료 버튼 - isDone : false -> true
  // 취소 버튼 - isDone : true -> false
  const clickUpdateBtn = (id) => {
    const updateTodo = todos.filter((todo) => {
      if (todo.id === id) {
        todo.isDone = !todo.isDone;
      }
      return todo;
    });
    setTodos(updateTodo);
  };

  const workingTodos = todos.filter((todo) => !todo.isDone);
  const doneTodos = todos.filter((todo) => todo.isDone);

  return (
    <main>
      <TodoForm
        title={title}
        content={content}
        onChangeTitleHandler={onChangeTitleHandler}
        onChangeContentHandler={onChangeContentHandler}
        clickAddBtn={clickAddBtn}
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
