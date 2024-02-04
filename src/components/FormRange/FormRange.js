import React, { useState } from "react";
import { Box, Slider, Typography } from "@mui/material";
import { formatPrice } from "../../utilis";
const FormRange = ({ name, width, min, size, defaultValue, price }) => {
  const step = 10000;
  const max = 500000;
  const [selectedPrice, setSelectedPrice] = useState(price || max);

  return (
    <Box>
      <Typography variant="body1">{formatPrice(selectedPrice)}</Typography>
      <Slider
        name={name}
        sx={{ width: `${width}px` }}
        disabled={false}
        step={step}
        max={max}
        min={min}
        size={size}
        value={selectedPrice}
        onChange={(e) => setSelectedPrice(e.target.value)}
      />
    </Box>
  );
};

export default FormRange;
