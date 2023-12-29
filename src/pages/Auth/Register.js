import React from "react";
import {
  FormControl,
  Box,
  Typography,
  TextField,
  Button,
  Tooltip,
} from "@mui/material";
import styled from "./Login.module.css";
import { Link } from "react-router-dom";
import { FormInput, SubmitBtn } from "../../components";
const Register = () => {
  return (
    <Box className={styled.mainBoxLogin}>
      <Box>
        <FormControl className={styled.formBox}>
          <Typography className={styled.header} variant="h5">
            Register
          </Typography>
          <FormInput
            label="Username"
            type="text"
            variant="outlined"
            fullWidth
            defaultValue=""
            name="username"
            required
          />
          <FormInput
            label="Email"
            type="email"
            variant="outlined"
            fullWidth
            name="email"
            required
          />
          <FormInput
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            name="password"
            required
          />

          <SubmitBtn
            text="Register"
            variant="contained"
            color="primary"
            style="1rem"
          />

          <Typography className={styled.registerLink} variant="p">
            Already a member?
            <Tooltip title="Login">
              <Link className={styled.linkRegister} to="/login">
                LOGIN
              </Link>
            </Tooltip>
          </Typography>
        </FormControl>
      </Box>
    </Box>
  );
};

export default Register;
