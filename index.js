import React, { Component } from "react";
import { render } from "react-dom";
import App from "./App";
import "./style.css";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./store/reducer";

const store = createStore(reducer);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
