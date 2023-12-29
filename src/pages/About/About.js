import { Box, Typography } from "@mui/material";
import React from "react";
import styled from "./About.module.css";
const About = () => {
  return (
    <Box className={styled.mainBoxAbout}>
      <Typography variant="h1">
        We love <span>comfy</span>
      </Typography>
      <Typography variant="body2">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quae
        quam blanditiis vitae, dolor non eveniet ipsum voluptatibus, quia optio
        aut! Perferendis ipsa cumque ipsam nostrum reprehenderit ad illo sed
        officiis ea tempore! Similique eos minima sit porro, ratione aspernatur!
      </Typography>
    </Box>
  );
};

export default About;
