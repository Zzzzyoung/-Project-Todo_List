import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../components/pages/Home";
import Detail from "../components/pages/Detail";

function Router() {
  // 로컬 스토리지에서 데이터 불러오기
  const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];
  const [todos, setTodos] = useState(savedTodos);

  // todos가 변경될 때마다 로컬 스토리지에 저장
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Home todos={todos} setTodos={setTodos} />}
        ></Route>
        <Route path="/detail/:id" element={<Detail todos={todos} />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
