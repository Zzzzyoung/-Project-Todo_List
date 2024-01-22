import React, { useState } from "react";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "밥 먹기",
      content: "밥을 잘 챙겨먹자",
      isDone: false,
    },
    {
      id: 2,
      title: "리액트",
      content: "강의 듣기",
      isDone: true,
    },
  ]);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const onChangeTitleHAndler = (event) => setTitle(event.target.value);
  const onChangeContentHAndler = (event) => setContent(event.target.value);

  // 추가하기 버튼
  const clickAddBtn = () => {
    const newTodo = {
      id: todos.length + 1,
      title,
      content,
    };

    setTodos([...todos, newTodo]);
    setTitle("");
    setContent("");
  };

  // 삭제하기 버튼
  const clickDeleteBtn = (id) => {
    const remainTodo = todos.filter((todo) => todo.id !== id);
    setTodos(remainTodo);
  };

  // 완료 버튼
  // isDone : false -> true
  const clickCompleteBtn = (id) => {
    const workingTodo = todos.filter((todo) => {
      if (todo.id === id) {
        todo.isDone = !todo.isDone;
      }
      return todo;
    });
    setTodos(workingTodo);
  };

  // 취소 버튼
  // isDone : true -> false
  const clickCancleBtn = (id) => {
    const workingTodo = todos.filter((todo) => {
      if (todo.id === id) {
        todo.isDone = !todo.isDone;
      }
      return todo;
    });
    setTodos(workingTodo);
  };

  return (
    <div className="layout">
      <header>
        <div>JiYoung's To Do List</div>
        <div>React</div>
      </header>

      <form>
        <div>
          제목
          <input type="text" value={title} onChange={onChangeTitleHAndler} />
          내용
          <input
            type="text"
            value={content}
            onChange={onChangeContentHAndler}
          />
        </div>
        <button onClick={clickAddBtn}>추가하기</button>
      </form>

      <div>
        <div>
          <h2>Working..🔥</h2>
          {todos.map((item) => {
            if (item.isDone === false) {
              return (
                <div key={item.id}>
                  {item.title}
                  {item.content}
                  <button onClick={clickDeleteBtn}>삭제하기</button>
                  <button onClick={clickCompleteBtn}>완료</button>
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>

        <div>
          <h2>Done..!🎉</h2>
          {todos.map((todo) => {
            if (todo.isDone === true) {
              return (
                <div key={todo.id}>
                  {todo.title}
                  {todo.content}
                  <button onClick={clickDeleteBtn}>삭제하기</button>
                  <button onClick={clickCancleBtn}>취소</button>
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>

      <footer>© 2024. Zyoung Co. all rights reserved.</footer>
    </div>
  );
}

export default App;
