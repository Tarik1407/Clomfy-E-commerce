import React from "react";
import { TextField } from "@mui/material";

const FormInput = ({
  label,
  type,
  variant,
  fullWidth,
  defaultValue,
  name,
  required,
}) => {
  return (
    <TextField
      label={label}
      type={type}
      variant={variant}
      fullWidth={fullWidth}
      name={name}
      sx={{ marginBottom: "2rem" }}
      defaultValue={defaultValue}
      required
    />
  );
};

export default FormInput;
