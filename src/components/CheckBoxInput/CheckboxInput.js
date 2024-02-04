import { Box } from "@mui/material";
import React, { useState } from "react";
import { Checkbox } from "@mui/material";

const CheckboxInput = ({ name, label, defaultValue }) => {
  // const [checked, setChecked] = useState(false);
  return (
    <Box sx={{ display: "grid" }}>
      <label htmlFor={label}>{label}</label>
      <Checkbox
        defaultChecked={defaultValue}
        name={name}
        // checked={checked}
        // onChange={(e) => setChecked(e.target.checked)}
        inputProps={{ "aria-label": "controlled" }}
        label={label}
      />
    </Box>
  );
};

export default CheckboxInput;
