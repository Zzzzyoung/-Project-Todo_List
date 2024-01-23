import React, { useEffect, useState } from "react";
import "./App.css";
import { Header, Footer } from "./component/Layout";
import Form from "./component/Form";
import List from "./component/List";

function App() {
  // 로컬 스토리지에서 데이터 불러오기
  const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];
  const [todos, setTodos] = useState(savedTodos);

  // todos가 변경될 때마다 로컬 스토리지에 저장
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="layout">
      <Header />
      <Form todos={todos} setTodos={setTodos} />
      <List todos={todos} setTodos={setTodos} />
      <Footer />
    </div>
  );
}

export default App;
