import React from "react";
import { Paper, Button, Box } from "@mui/material";
import { Image } from "@mui/icons-material";

const CarouselItem = ({ title, img }) => {
  return (
    <Box>
      <img sx={{ width: "100%", height: "45vh" }} src={img} alt={title} />
    </Box>
  );
};

export default CarouselItem;
