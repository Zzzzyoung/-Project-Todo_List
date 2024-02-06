import React, { useEffect, useState } from "react";
import { Layout } from "../../Style";
import Header from "../layout/Header";
import TodoController from "../todo/TodoController";
import Footer from "../layout/Footer";

function Home() {
  // 로컬 스토리지에서 데이터 불러오기
  const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];
  const [todos, setTodos] = useState(savedTodos);

  // todos가 변경될 때마다 로컬 스토리지에 저장
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <Layout>
      <Header />
      <TodoController todos={todos} setTodos={setTodos} />
      <Footer />
    </Layout>
  );
}

export default Home;
