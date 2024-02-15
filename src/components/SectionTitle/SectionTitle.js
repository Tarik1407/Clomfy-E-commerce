import React from "react";
import { Box, Typography } from "@mui/material";
import styled from "./SectionTitle.module.css";
const SectionTitle = ({ text }) => {
  return (
    <Box>
      <Typography variant="body1" className={styled.text}>
        {text}
      </Typography>
    </Box>
  );
};

export default SectionTitle;
