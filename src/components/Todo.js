import React, { PropTypes } from "react";
import { connect } from "react-redux";
import { removeTodo } from "../actions";

const Todo = ({ onClick, onTodoRemoveClick, completed, text }) => (
  <li
    style={{
      textDecoration: completed ? "line-through" : "none"
    }}
  >
    <div className="view">
      <label htmlFor="todo" onClick={onClick}>{text}</label>
      <button className="destroy" onClick={onTodoRemoveClick} />
    </div>
  </li>
);

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
};

export default Todo;
