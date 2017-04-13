import React, { PropTypes } from "react";

const Todo = ({ onClick, completed, text }) => (
  <li
    style={{
      textDecoration: completed ? "line-through" : "none"
    }}
  >
    <div className="view">
      <label htmlFor="todo" onClick={onClick}>{text}</label>
      <button className="destroy" />
    </div>
  </li>
);

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
};

export default Todo;
