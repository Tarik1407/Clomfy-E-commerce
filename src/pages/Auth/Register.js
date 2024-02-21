import React from "react";
import { Box, Typography, Tooltip } from "@mui/material";
import styled from "./Login.module.css";
import { Form, Link, redirect } from "react-router-dom";
import { FormInput, SubmitBtn } from "../../components";
import { customFetch } from "../../utilis";
import { toast } from "react-toastify";

export const registerActions = async ({ request }) => {
  console.log(request, "requestttt");
  const formData = await request.formData();
  console.log(formData, "formData");
  const data = Object.fromEntries(formData);
  console.log(data, "dataa");

  try {
    const response = await customFetch.post("/auth/local/register", data);
    toast.success("Account is registred!");
    return redirect("/login");
  } catch (error) {
    const errorMessage =
      error?.response?.data?.error?.message ||
      "please double check your credentials";

    toast.error(errorMessage);
    return null;
  }
};

const Register = () => {
  return (
    <Box className={styled.mainBoxLogin}>
      <Box>
        <Form method="post" className={styled.formBox}>
          <Typography className={styled.header} variant="h5">
            Register
          </Typography>
          <FormInput
            label="Username"
            type="text"
            variant="outlined"
            fullWidth
            defaultValue="james2 smith"
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
            defaultValue="james1@gmail.com"
          />
          <FormInput
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            name="password"
            required
            defaultValue="secret"
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
        </Form>
      </Box>
    </Box>
  );
};

export default Register;
