import * as React from "react";
import "./styles.css";
import useDraggable from "./useDraggable";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Collapse from "@mui/material/Collapse";

//const [name, setName] = React.useState("draggable");
const handleOverlapCheck = (e: React.MouseEvent) => {
  const array = Array.from(document.querySelectorAll(".draggable"));
  array.map((item) => {
    if (
      item?.getBoundingClientRect().left -
        (e.target as Element).getBoundingClientRect().left <
      1
    ) {
      if (
        !(
          item?.getBoundingClientRect().right >
          (e.target as Element).getBoundingClientRect().left
        )
      ) {
        console.log("touched");
      }
    }
  });
  //return array;
};

export default function App() {
  const [collapse, setCollapse] = React.useState(false);
  const handleCollapse = () => {
    setCollapse((collapse) => !collapse);
    //setCollapse(true);
    //setCollapse(false);
  };
  const elRefs = React.useRef([]);
  const [ref] = useDraggable();
  const [ref2] = useDraggable();
  //setPieces([...useDraggable()[0]])
  return (
    //{handleOverlap}
    <div className="container">
      <div
        className="draggable"
        style={{ width: "300px", height: "95px" }}
        onMouseMove={handleOverlapCheck}
        ref={useDraggable()[0]}
      >
        <div style={{ top: "0px", left: "50px" }}>
          <svg
            width="162px"
            height="94px"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            opacity="1"
            transform="translate(-18,50)"
          >
            <g>
              <path
                style={{
                  fill: "rgb(10, 150, 10)",
                  stroke: "rgb(0, 0, 0)",
                  filter: "drop-shadow(0 0 20px #1b5e20)",
                }}
                d="M 10.644 2 L 140.644 2 L 140.644 92 L 10.644 92 L 10.644 56.901 C 5.176 56.901 0.743 52.468 0.743 47 C 0.743 41.532 5.176 37.099 10.644 37.099 L 10.644 2 Z"
              ></path>
            </g>
          </svg>
          <Collapse orientation="horizontal" in={collapse}>
            <svg
              width="162px"
              height="94px"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              opacity="1"
              transform="translate(120,-48)"
            >
              <g>
                <path
                  style={{ fill: "rgb(216, 216, 216)", stroke: "rgb(0, 0, 0)" }}
                  d="M 2 2 H 132 V 92 H 2 V 2 Z"
                ></path>
              </g>
            </svg>
          </Collapse>
        </div>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={0}
          label="Age"
          onChange={handleCollapse}
          displayEmpty
          style={{ top: "0px", left: "-150px" }}
        >
          <MenuItem disabled value={0}>
            <em>Select</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </div>
      <div
        className="draggable"
        style={{ width: "80px", height: "95px" }}
        ref={useDraggable()[0]}
      >
        <svg
          width="72px"
          height="94px"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          opacity="1"
        >
          <g>
            <path
              style={{ fill: "rgb(216, 216, 240)", stroke: "rgb(0, 0, 0)" }}
              d="M 2 2 L 62 2 L 62 37.099 C 56.532 37.099 52.099 41.532 52.099 47 C 52.099 52.468 56.532 56.901 62 56.901 L 62 92 L 2 92 Z"
            ></path>
          </g>
        </svg>
      </div>
    </div>
  );
}
