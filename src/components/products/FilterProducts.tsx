 import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";

import { actions } from "../../redux/slice/product";

export default function FilterProducts() {
  const dispatch = useDispatch<AppDispatch>();

  const [age, setAge] = React.useState("");

  const handleChange = (value: string): void => {
    console.log(value, "value");
    setAge(value);

   /*  if (value === "Name") {
      dispatch(actions.sortNameAscending());
    }
    if (value === "Price") {
      dispatch(actions.sortPriceAscending());
    }
    if (value === "Category") {
      dispatch(actions.sortCategoryAscending());
    } */
  };

  return ;
   /*  <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
      <FormControl sx={{ width: 0.1, }} size="small">
        <InputLabel id="demo-simple-select-label">Sort</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Sort"
          onChange={(e) => handleChange(e.target.value)}
        >
          <MenuItem value="Name">Name</MenuItem>
          <MenuItem value="Price">Price</MenuItem>
          <MenuItem value="Category">Category</MenuItem>
        </Select>
      </FormControl>
    </Box> */
 
}
 