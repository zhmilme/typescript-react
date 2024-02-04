import React, { useState } from "react";
import SplitPane, { Pane } from "split-pane-react";
import {
  JsonView,
  allExpanded,
  darkStyles,
  defaultStyles,
} from "react-json-view-lite";
import "react-json-view-lite/dist/index.css";
import "split-pane-react/esm/themes/default.css";
import App from "./transg";
import data from "./config.json";

export default function Screen() {
  const [sizes, setSizes] = useState(["60%", "40%", "auto"]);

  const layoutCSS = {
    height: "100%",
    display: "flex",
    alignItems: "center",
    //justifyContent: "center",
  };

  return (
    <div style={{ height: 1000 }}>
      <SplitPane split="vertical" sizes={sizes} onChange={setSizes}>
        <Pane minSize={"60%"} maxSize="90%">
          <div style={{ ...layoutCSS, background: "#ddd" }}>
            <App />
          </div>
        </Pane>
        <div
          style={{
            background: "#000002",
            color: "#fff",
            overflowY: "scroll",
          }}
        >
          <JsonView
            data={data}
            shouldExpandNode={allExpanded}
            style={darkStyles}
          />
        </div>
      </SplitPane>
    </div>
  );
}
