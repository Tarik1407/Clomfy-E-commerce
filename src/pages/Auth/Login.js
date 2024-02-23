import React from "react";
import { Box, Typography, Button, Tooltip } from "@mui/material";
import styled from "./Login.module.css";
import { Form, Link, redirect, useNavigate } from "react-router-dom";
import { FormInput, SubmitBtn } from "../../components";
import { useDispatch } from "react-redux";
import { loginUser } from "../../features/user/userSlice";
import { customFetch } from "../../utilis";
import { toast } from "react-toastify";
export const loginAction =
  (store) =>
  async ({ request }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);

    try {
      const response = await customFetch.post("/auth/local", data);
      store.dispatch(loginUser(response.data));
      toast.success("Logeed successfully");
      return redirect("/");
    } catch (error) {
      console.log(error);
      const errorMessage =
        error?.response?.data?.error?.message ||
        "please double check your credentials";

      toast.error(errorMessage);
      return null;
    }
  };

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Login as Guest Demo
  const loginAsGuestUser = async () => {
    try {
      const response = await customFetch.post("/auth/local", {
        identifier: "guests1510@gmail.com",
        password: "guests1510",
      });
      dispatch(loginUser(response.data));
      toast.success(`Welcome guests User `);
      navigate("/");
    } catch (error) {
      console.log(error);
      toast.error("Double check your problems");
    }
  };

  return (
    <Box className={styled.mainBoxLogin}>
      <Box>
        <Form method="post" className={styled.formBox}>
          <Typography className={styled.header} variant="h5">
            Login
          </Typography>
          <FormInput
            label="Email"
            type="email"
            variant="outlined"
            fullWidth
            name="identifier"
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
            text="Login"
            variant="contained"
            color="primary"
            style="1rem"
          />
          <Button
            sx={{ marginBottom: "2rem" }}
            variant="contained"
            color="secondary"
            onClick={() => loginAsGuestUser()}
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
        </Form>
      </Box>
    </Box>
  );
};

export default Login;
