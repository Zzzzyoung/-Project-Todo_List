import React, { useState } from "react";
import "./App.css";
import { Header, Footer } from "./component/Layout";
import Form from "./component/Form";
import List from "./component/List";

function App() {
  const [todos, setTodos] = useState([]);

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
