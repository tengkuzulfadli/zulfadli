import React from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import './Main.css';
import App from "./App";

let targetElement = document.querySelector("#app");

render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
targetElement);