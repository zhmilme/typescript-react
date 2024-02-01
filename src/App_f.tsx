//import './App.css'
import * as React from "react";
import { useState } from "react";
import ReactDOM from "react-dom";
import Draggable, { DraggableCore } from "react-draggable";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";
import Collapse from "@mui/material/Collapse";
import Grow from "@mui/material/Grow";
import styled from "styled-components";

function JSON_constructor() {
  const [activeDrags, setActiveDrags] = useState(0);
  const [deltaPosition, setDeltaPosition] = useState({ x: 0, y: 0 });
  const [age, setAge] = useState("");
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };
  const handleDrag = (e: any, ui: any) => {
    const { x, y } = deltaPosition;
    setDeltaPosition({
      x: x + ui.deltaX,
      y: y + ui.deltaY,
    });
  };

  const onStart = () => {
    setActiveDrags(activeDrags + 1);
  };

  const onStop = () => {
    setActiveDrags(activeDrags - 1);
  };
  const onDrop = (e: any) => {
    setActiveDrags(activeDrags - 1);
    if (e.target.classList.contains("drop-target")) {
      alert("Dropped!");
      e.target.classList.remove("hovered");
    }
  };
  const onDropAreaMouseEnter = (e: any) => {
    if (activeDrags) {
      e.target.classList.add("hovered");
    }
  };
  const onDropAreaMouseLeave = (e: any) => {
    e.target.classList.remove("hovered");
  };
  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };
  const dragHandlers = { onStart: onStart, onStop: onStop };

  return (
    <div>
      <div>
        <Draggable cancel="strong" {...dragHandlers}>
          <div className="box" onClick={handleOpen}>
            <strong className="no-cursor">
              <Select
                id="demo-controlled-open-select"
                open={open}
                onClose={handleClose}
                onOpen={handleOpen}
                value={age}
                label="Age"
                onChange={handleChange}
                //onDrag={handleDrag}
                //displayEmpty
                style={{ top: "70px", left: "30px" }}
              >
                <option value={10}>Ten</option>
                <option value={20}>Twenty</option>
                <option value={30}>Thirty</option>
              </Select>
            </strong>
            <div>
              <svg
                width="162px"
                height="94px"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                opacity="1"
              >
                <g>
                  <path
                    style={{
                      fill: "rgb(216, 216, 216)",
                      stroke: "rgb(0, 0, 0)",
                    }}
                    d="M 10.644 2 L 140.644 2 L 140.644 92 L 10.644 92 L 10.644 56.901 C 5.176 56.901 0.743 52.468 0.743 47 C 0.743 41.532 5.176 37.099 10.644 37.099 L 10.644 2 Z"
                  ></path>
                </g>
              </svg>
            </div>
          </div>
        </Draggable>
        <Draggable onDrag={handleDrag} {...dragHandlers}>
          <svg
            width="72px"
            height="94px"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            opacity="1"
          >
            <g>
              <path
                style={{ fill: "rgb(216, 216, 216)", stroke: "rgb(0, 0, 0)" }}
                d="M 2 2 L 62 2 L 62 37.099 C 56.532 37.099 52.099 41.532 52.099 47 C 52.099 52.468 56.532 56.901 62 56.901 L 62 92 L 2 92 Z"
              ></path>
            </g>
          </svg>
        </Draggable>
      </div>
      <Draggable onDrag={handleDrag} {...dragHandlers}>
        <div>
          <svg
            width="162px"
            height="94px"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            opacity="1"
          >
            <g>
              <path
                style={{ fill: "rgb(216, 216, 216)", stroke: "rgb(0, 0, 0)" }}
                d="M 10.644 2 L 140.644 2 L 140.644 92 L 10.644 92 L 10.644 56.901 C 5.176 56.901 0.743 52.468 0.743 47 C 0.743 41.532 5.176 37.099 10.644 37.099 L 10.644 2 Z"
              ></path>
            </g>
          </svg>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age as string}
            label="Age"
            onChange={handleChange}
            displayEmpty
            style={{ top: "-50px", left: "-130px" }}
          >
            <MenuItem disabled value="">
              <em>Select</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </div>
      </Draggable>
    </div>
  );
}

export default function App() {
  return (
    <main style={{ background: "grey", height: "1000px", width: "1000px" }}>
      <JSON_constructor />
    </main>
  );
}
