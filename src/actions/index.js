import { v4 } from "uuid";

export const addTodo = text => ({
  type: "ADD_TODO",
  id: v4(),
  text
});

export const setVisibilityFilter = filter => ({
  type: "SET_VISIBILITY_FILTER",
  filter
});

export const toggleTodo = id => ({
  type: "TOGGLE_TODO",
  id
});

export const removeTodo = id => ({
  type: "REMOVE_TODO",
  id
});
