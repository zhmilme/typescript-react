//import Select, { SelectChangeEvent } from "@mui/material/Select";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import MuiInput from "@mui/material/Input";
//import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import { styled } from "@mui/material/styles";

const Input = styled(MuiInput)`
  width: 42px;
`;
export function ItemSelect({ func, label, value }: any) {
  const options = ["10", "20", "30", "40", "50"];
  return (
    <select
      style={{
        position: "absolute",
        margin: "auto",
        top: "25px",
        left: "10px",
      }}
    >
      <option value="fruit">Fruit</option>
      <option value="vegetable">Vegetable</option>
      <option value="meat">Meat</option>
    </select>
  );
}
export function ItemRadio({ func, label, value }: any) {
  return (
    <RadioGroup
      row
      aria-labelledby="demo-radio-buttons-group-label"
      defaultValue="female"
      name="radio-buttons-group"
      onChange={func}
    >
      <FormControlLabel value="female" control={<Radio />} label="on" />
      <FormControlLabel value="male" control={<Radio />} label="off" />
    </RadioGroup>
  );
}
export function ItemInput({ func, label, value }: any) {
  return (
    <Input
      value={value}
      size="small"
      inputProps={{
        step: 10,
        min: 0,
        max: 100,
        type: "number",
        "aria-labelledby": "input-slider",
      }}
      onChange={func}
    />
  );
}
function OptionType({ func, label, value, type }: any) {
  if (type == 0) {
    return <ItemSelect func={func} label={label} value={value} />;
  } else if (type == 1) {
    return <ItemInput func={func} label={label} value={value} />;
  } else {
    return <ItemRadio func={func} label={label} value={value} />;
  }
}
export default function OptionItem({ func, label, value, type }: any) {
  return (
    <FormControl
      sx={{ m: 1, minWidth: 100 }}
      size="small"
      style={{ position: "absolute", top: "10px", left: "10px" }}
    ></FormControl>
  );
}
