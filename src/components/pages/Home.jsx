import { Layout } from "Style";
import Footer from "components/layout/Footer";
import Header from "components/layout/Header";
import TodoController from "components/todo/TodoController";
import React from "react";

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
