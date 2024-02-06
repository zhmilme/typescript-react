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
import { Root, Main, Collapsable } from "./components/items";
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
        <Pane minSize={"50%"} maxSize="90%">
          <div
            style={{ ...layoutCSS, background: "#ddd", alignItems: "center" }}
          >
            <Root />
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
          <JsonView
            data={data}
            shouldExpandNode={allExpanded}
            style={{ ...darkStyles }}
          />
        </div>
      </SplitPane>
    </div>
  );
}
