import React from "react";
import ReactDOM from "react-dom/client";
import Screen from "./screen";
import App from "./transg";
import useDraggable, { handleOverlapCheck } from "./useDraggable";
import { Root, Main, Collapsable } from "./components/items";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Screen />
  </React.StrictMode>,
);
