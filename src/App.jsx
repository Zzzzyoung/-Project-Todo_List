import React, { useEffect, useState } from "react";
import GlobalStyle from "./GlobalStyle";
import { Layout } from "./Style";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import TodoController from "./components/todo/TodoController";

function App() {
  // 로컬 스토리지에서 데이터 불러오기
  const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];
  const [todos, setTodos] = useState(savedTodos);

  // todos가 변경될 때마다 로컬 스토리지에 저장
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <GlobalStyle />
      <Layout>
        <Header />
        <TodoController todos={todos} setTodos={setTodos} />
        <Footer />
      </Layout>
    </>
  );
}

export default App;
