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
const Login = () => {
  return (
    <Box className={styled.mainBoxLogin}>
      <Box>
        <FormControl className={styled.formBox}>
          <Typography className={styled.header} variant="h5">
            Login
          </Typography>
          <FormInput
            label="Email"
            type="email"
            variant="outlined"
            fullWidth
            defaultValue="test@test.com"
            name="identifier"
            required
          />
          <FormInput
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            defaultValue="secret"
            name="password"
            required
          />

          <SubmitBtn
            text="Login"
            variant="contained"
            color="primary"
            style="1rem"
          />
          <Button
            sx={{ marginBottom: "2rem" }}
            variant="contained"
            color="secondary"
          >
            Guest user
          </Button>
          <Typography className={styled.registerLink} variant="p">
            Already a member?
            <Tooltip title="Register">
              <Link className={styled.linkRegister} to="/register">
                REGISTER
              </Link>
            </Tooltip>
          </Typography>
        </FormControl>
      </Box>
    </Box>
  );
};

export default Login;
