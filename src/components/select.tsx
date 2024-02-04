import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";

export default function SelectItem({ func, label, value }: any) {
  return (
    <FormControl
      sx={{ m: 1, minWidth: 100 }}
      size="small"
      style={{ position: "absolute", top: "10px", left: "10px" }}
    >
      <div style={{ textAlign: "center" }}>{label}</div>
      <br></br>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={value}
        label="Age"
        onChange={func}
        displayEmpty
      >
        <MenuItem disabled value={0}>
          <em>Select</em>
        </MenuItem>
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
        <MenuItem value={40}>Fourty</MenuItem>
        <MenuItem value={50}>Fifty</MenuItem>
      </Select>
    </FormControl>
  );
}
