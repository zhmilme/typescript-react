//import './App.css'
import * as React from 'react'
import { useState } from 'react'
import ReactDOM from 'react-dom'
import Draggable, {DraggableCore} from 'react-draggable'; 
//import Select from 'react-dropdown-select'
//import { Select, selectClasses } from '@mui/base/Select';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Option } from '@mui/base/Option';
import Collapse from '@mui/material/Collapse';
import Grow from '@mui/material/Grow';
//import SplitPane, { Pane } from 'split-pane-react';
//import 'split-pane-react/esm/themes/default.css';
//import BasicSelect from './select';


class JSON_constructor extends React.Component {
  state = {
    activeDrags: 0,
    deltaPosition: {
      x: 0, y: 0
    },
    controlledPosition: {
      x: -0, y: 0
    },
    age: '',
    set: false
  };
  handleDrag = (e: any, ui: any) => {
    const {x, y} = this.state.deltaPosition;
    this.setState({
      deltaPosition: {
        x: x + ui.deltaX,
        y: y + ui.deltaY,
      }
    });
  };

  onStart = () => {
    this.setState({activeDrags: ++this.state.activeDrags});
  };

  onStop = () => {
    this.setState({activeDrags: --this.state.activeDrags});
  };
  onDrop = (e: any) => {
    this.setState({activeDrags: --this.state.activeDrags});
    if (e.target.classList.contains("drop-target")) {
      alert("Dropped!");
      e.target.classList.remove('hovered');
    }
  };
  onDropAreaMouseEnter = (e: any) => {
    if (this.state.activeDrags) {
      e.target.classList.add('hovered');
    }
  }
  onDropAreaMouseLeave = (e: any) => {
    e.target.classList.remove('hovered');
  }

  // For controlled component
  adjustXPos = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    const {x, y} = this.state.controlledPosition;
    this.setState({controlledPosition: {x: x - 10, y}});
  };

  adjustYPos = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    const {controlledPosition} = this.state;
    const {x, y} = controlledPosition;
    this.setState({controlledPosition: {x, y: y - 10}});
  };

  onControlledDrag = (e: any, position: any) => {
    const {x, y} = position;
    this.setState({controlledPosition: {x, y}});
  };

  onControlledDragStop = (e: any, position: any) => {
    this.onControlledDrag(e, position);
    this.onStop();
  };
  //[age, setAge] = this.useState('');

  handleChange = (event: SelectChangeEvent) => {
        this.setState({age: event.target.value, set: true});
      };

  render() {
    const dragHandlers = {onStart: this.onStart, onStop: this.onStop};
    const {deltaPosition, controlledPosition} = this.state;
    return (
      <div>
          <div>

                <Draggable onDrag={this.handleDrag} {...dragHandlers}>
                    <svg width="72px" height="94px" version="1.1" xmlns="http://www.w3.org/2000/svg" opacity='1'>
                        <g>
                            <path style={{fill: 'rgb(216, 216, 216)', stroke: 'rgb(0, 0, 0)'}} d="M 2 2 L 62 2 L 62 37.099 C 56.532 37.099 52.099 41.532 52.099 47 C 52.099 52.468 56.532 56.901 62 56.901 L 62 92 L 2 92 Z"></path>
                        </g>
                    </svg>

                </Draggable>
                <Draggable position={controlledPosition}  onDrag={this.onControlledDrag} {...dragHandlers}>
                        <svg width="162px" height="94px" version="1.1" xmlns="http://www.w3.org/2000/svg" opacity='1'>
                            <g>    
                                <path style={{fill: 'rgb(216, 216, 216)', stroke: 'rgb(0, 0, 0)'}} d="M 10.644 2 L 140.644 2 L 140.644 92 L 10.644 92 L 10.644 56.901 C 5.176 56.901 0.743 52.468 0.743 47 C 0.743 41.532 5.176 37.099 10.644 37.099 L 10.644 2 Z"></path>
                            </g>
                        </svg>
                </Draggable>
                <Draggable position= {{x: controlledPosition.x - 140, y: controlledPosition.y - 30}} onStart={() => false}>
                    <Select
                        displayEmpty
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={this.state.age as string}
                        label="Age"
                        onChange={this.handleChange}
                    >
                        <MenuItem disabled value="">
                          <em>Placeholder</em>
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </Draggable>
              <Draggable position= {{x: controlledPosition.x + 211, y: controlledPosition.y - 117}} onStart={() => false}>
                  <Collapse orientation="horizontal" in={this.state.set}>
                   <svg width="162px" height="94px" version="1.1" xmlns="http://www.w3.org/2000/svg" opacity='1'>
                       <g>
                           <path style={{fill: 'rgb(216, 216, 216)', stroke: 'rgb(0, 0, 0)'}} d="M 2 2 H 132 V 92 H 2 V 2 Z"></path>
                       </g>
                   </svg>
                  </Collapse>
              </Draggable>
        </div>
        <Draggable onDrag={this.handleDrag} {...dragHandlers}>
                  
                <svg width="162px" height="94px" version="1.1" xmlns="http://www.w3.org/2000/svg" opacity='1'>
                      <g>    
                        <path style={{fill: 'rgb(216, 216, 216)', stroke: 'rgb(0, 0, 0)'}} d="M 10.644 2 L 140.644 2 L 140.644 92 L 10.644 92 L 10.644 56.901 C 5.176 56.901 0.743 52.468 0.743 47 C 0.743 41.532 5.176 37.099 10.644 37.099 L 10.644 2 Z"></path>
                      </g>

              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={this.state.age as string}
                label="Age"
                onChange={this.handleChange}
                displayEmpty
                style={{top: "-70px", left: "30px"}}
              >
                <MenuItem disabled value="">
                  <em>Select</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>  

        </Draggable>
          <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={this.state.age as string}
              label="Age"
              onChange={this.handleChange}
              displayEmpty
          >
              <MenuItem disabled value="">
                <em>Placeholder</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
          </Select>
      </div>
    );
  }
}


export default function App() {
    return (
        <main style={{ background: "grey", height: "1000px", width: "1000px"}}>

                      <JSON_constructor/>

        </main>
    )
}
