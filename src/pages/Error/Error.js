import React from "react";
import { useRouteError } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";
import styled from "./Error.module.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const Error = () => {
  const error = useRouteError();
  const { status, statusText, data } = error;
  return (
    <>
      <Box className={styled.mainBoxError}>
        <Typography color="primary" variant="h1">
          {status}
        </Typography>
        <Typography color="secondary" variant="h3">
          {statusText}
        </Typography>
        <Typography color="success" variant="p">
          Sorry, we couldn't find the page you're looking for
        </Typography>
        <Button
          startIcon={<ArrowBackIcon />}
          href="/"
          size="medium"
          variant="contained"
        >
          Back home
        </Button>
      </Box>
    </>
  );
};

export default Error;
