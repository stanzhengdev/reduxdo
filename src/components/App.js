import React from "react";
import Footer from "./Footer";
import AddTodo from "../containers/AddTodo";
import VisibleTodoList from "../containers/VisibleTodoList";

const App = () => (
  <div className="todoapp">
    <header>
      <h1>Todos</h1>
      <AddTodo />
    </header>
    <section className="main">
      <VisibleTodoList className="main" />
    </section>
    <Footer />
  </div>
);

export default App;
