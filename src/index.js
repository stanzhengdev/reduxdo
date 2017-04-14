import React from "react";
import { render } from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import App from "./components/App";
import reducer from "./reducers";
import "./App.css";
import { loadState, saveState } from "./localStorage";

let persistedState = loadState();

const store = createStore(
  reducer,
  persistedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => {
  saveState({
    todos: store.getState().todos
  });
});

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
