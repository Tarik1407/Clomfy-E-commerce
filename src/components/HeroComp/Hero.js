import React from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import styled from "./Landing.module.css";
import { Link } from "react-router-dom";
import img1 from "../../components/Carousel/hero1.jpg";

const Hero = () => {
  return (
    <>
      <Grid container spacing={4} className={styled.landingMainBox}>
        <Grid
          className={styled.textLandingBox}
          container
          gap={3}
          item
          xs={7}
          sm={12}
          md={12}
          lg={7}
        >
          <Typography variant="h2">
            We are changing the way people shop
          </Typography>
          <Typography variant="body2">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
            repellat explicabo enim soluta temporibus asperiores aut obcaecati
            perferendis porro nobis.
          </Typography>
          <Button variant="contained">
            <Link to="/products">Our products</Link>
          </Button>
        </Grid>
        <Grid
          className={styled.carouselBox}
          item
          xs={5}
          sx={{
            display: { xs: "none", md: "none", lg: "flex" },
            marginTop: "5rem",
          }}
        >
          <Box
            component="img"
            alt="Some random text"
            src={img1}
            height={380}
            width={500}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default Hero;
