import React from "react";
import ReactDOM from "react-dom/client";
import * as calc from "./Cals";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <li>Banana sum of 1 ,2 is {calc.add(1, 2)}</li>
    <li>Banana minus of 1 ,2 is {calc.substract(1, 2)}</li>
    <li>Banana multiply of 1 ,2 is {calc.multiply(1, 2)}</li>
    <li>Banana Devide of 1 ,2 is {calc.devide(1, 2)}</li>
  </>
);
