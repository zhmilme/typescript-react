import React, { useState } from "react";
import SplitPane, { Pane } from "split-pane-react";
import JsonView from "@uiw/react-json-view";
import "react-json-view-lite/dist/index.css";
import "split-pane-react/esm/themes/default.css";
import useDraggable, { handleOverlapCheck } from "./useDraggable";
import { Root, Main, Collapsable } from "./components/items";
import ListItem from "@mui/material/ListItem";
import { TransitionGroup } from "react-transition-group";
import App from "./transg";
import data from "./data.json";

export default function Screen() {
  const [sizes, setSizes] = useState([window.innerWidth * 0.6, "40%", "auto"]);

  const layoutCSS = {
    height: "100%",
    display: "flex",

    //justifyContent: "center",
  };

  return (
    <div style={{ height: 1000 }}>
      <SplitPane
        split="vertical"
        sizes={sizes}
        onChange={setSizes}
        sashRender={() => null}
      >
        <Pane minSize={"60%"} maxSize="60%">
          <div
            style={{ ...layoutCSS, background: "#ddd", alignItems: "center" }}
          >
            <App />
          </div>
        </Pane>
        <div
          style={{
            ...layoutCSS,
            overflow: "auto",
            backgroundColor: "#000000",
          }}
        >
          <JsonView value={data} />
        </div>
      </SplitPane>
    </div>
  );
}
