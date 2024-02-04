import React from "react";
import styled from "./FormSelect.module.css";
import { Box, MenuItem, Select, InputLabel } from "@mui/material";
const FormSelect = ({ label, name, list, defaultValue, width }) => {
  return (
    <Box>
      <InputLabel>{label}</InputLabel>
      <Select
        sx={{ width: `${width}px` }}
        name={name}
        label={label}
        defaultValue={defaultValue}
      >
        {list.map((list) => (
          <MenuItem key={list} value={list}>
            {list}
          </MenuItem>
        ))}
      </Select>
    </Box>
  );
};

export default FormSelect;
