import React from "react";
import { Layout } from "../../Style";
import Header from "../layout/Header";
import TodoController from "../todo/TodoController";
import Footer from "../layout/Footer";

function Home({ todos, setTodos }) {
  return (
    <Layout>
      <Header />
      <TodoController todos={todos} setTodos={setTodos} />
      <Footer />
    </Layout>
  );
}

export default Home;
