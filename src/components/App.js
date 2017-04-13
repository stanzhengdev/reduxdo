import React from "react";
import Footer from "./Footer";
import AddTodo from "../containers/AddTodo";
import VisibleTodoList from "../containers/VisibleTodoList";

const App = () => (
  <div className="todoapp">
    <header>
      <h1>Todos</h1>
    </header>
    <VisibleTodoList />
    <AddTodo />
    <Footer />
  </div>
);

export default App;
