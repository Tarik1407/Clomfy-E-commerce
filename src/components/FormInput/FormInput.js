import React from "react";
import { TextField, InputLabel } from "@mui/material";

const FormInput = ({
  label,
  type,
  variant,
  fullWidth,
  defaultValue,
  name,
  required,
  width,
}) => {
  return (
    <>
      <TextField
        sx={{ width: `${width}px`, marginTop: "24px" }}
        label={label}
        type={type}
        variant={variant}
        fullWidth={fullWidth}
        name={name}
        defaultValue={defaultValue}
        required={required}
      />
    </>
  );
};

export default FormInput;

