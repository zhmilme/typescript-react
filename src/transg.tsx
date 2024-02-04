import * as React from "react";
import Collapse from "@mui/material/Collapse";
import ListItem from "@mui/material/ListItem";
import { TransitionGroup } from "react-transition-group";
import { Root, Main, Collapsable } from "./components/items";
import useDraggable, { handleOverlapCheck } from "./useDraggable";
import SelectItem from "./components/select";
import { SelectChangeEvent } from "@mui/material/Select";

const FRUITS = ["10", "20", "30", "40", "50"];

interface RenderItemOptions {
  item: string;
  handleRemoveFruit: (item: string) => void;
}

export default function App() {
  const [items, setItems] = React.useState(FRUITS.slice(0, 1));
  const handleAddItem = (event: SelectChangeEvent) => {
    //const nextHiddenItem = FRUITS.find((i) => !items.includes(i));
    //if (nextHiddenItem) {
    setItems((prev) => [...prev, event.target.value]);
    //}
  };

  const handleRemoveFruit = (item: string) => {
    setItems((prev) => [...prev.filter((i) => i !== item)]);
  };

  function renderItem({ item, handleRemoveFruit }: RenderItemOptions) {
    return (
      <ListItem style={{ width: "130px" }}>
        <Collapsable />
        <SelectItem func={handleAddItem} label={item} value={item} />
      </ListItem>
    );
  }
  return (
    <div ref={useDraggable()[0]}>
      <TransitionGroup style={{ display: "flex" }}>
        {items.map((item) => (
          <Collapse
            orientation="horizontal"
            key={item}
            style={{ display: "inline", width: "auto" }}
          >
            {renderItem({ item, handleRemoveFruit })}
          </Collapse>
        ))}
      </TransitionGroup>
    </div>
  );
}
