import * as React from "react";
import "./styles.css";
import useDraggable from "./useDraggable";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Collapse from "@mui/material/Collapse";
import { Root, Main, Collapsable } from "./components/items";
//import SelectItem from "./components/select";

export default function App() {
  const [collapse, setCollapse] = React.useState(false);
  const handleCollapse = () => {
    setCollapse((collapse) => !collapse);
  };
  return (
    <div className="container">
      <div
        className="draggable"
        style={{ width: "300px", height: "95px" }}
        //onMouseMove={handleOverlapCheck}
        ref={useDraggable()[0]}
      >
        <Main />
        <div>
          <Collapse
            orientation="horizontal"
            in={collapse}
            style={{ display: "inline-block" }}
          >
            <Collapsable />
          </Collapse>
        </div>
      </div>
      <div
        className="draggable"
        style={{ width: "80px", height: "95px" }}
        ref={useDraggable()[0]}
      >
        <Root />
      </div>
    </div>
  );
}
