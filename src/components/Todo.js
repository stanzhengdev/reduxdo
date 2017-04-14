import React from "react";
import { connect } from "react-redux";
import { removeTodo } from "../actions";
import PropTypes from "prop-types";

const Todo = ({ onClick, onTodoRemoveClick, completed, text }) => (
  <li
    style={{
      textDecoration: completed ? "line-through" : "none"
    }}
  >
    <div className="view">
      <input className="toggle" type="checkbox" onClick={onClick} />
      <label htmlFor="todo">{text}</label>
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
