import React, { useState } from "react";
import {
  Box,
  Button,
  Grid,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { useLoaderData } from "react-router-dom";
import { customFetch, formatPrice } from "../../utilis";
import styled from "./SingleProduct.module.css";
import { BreadCumbsComponent } from "../../components";
export const loaderItem = async ({ params }) => {
  const response = await customFetch(`/products/${params.id}`);
  const singleDataItem = response.data.data;
  return { singleDataItem };
};

const SingleProduct = () => {
  const { singleDataItem } = useLoaderData();
  const [amount, setAmount] = useState("");

  const handleChange = (event) => {
    setAmount(event.target.value);
  };
  const { title, company, description, image, price, colors } =
    singleDataItem.attributes;

  return (
    <Grid className={styled.mainBoxSingleProduct} container spacing={4}>
      <Grid className={styled.imageBox} item xs={12} md={12} lg={6}>
        <Box>
          <BreadCumbsComponent
            homePage="Home"
            middlePage="Products"
            finalPage={title}
          />
        </Box>
        <Box
          sx={{ marginTop: "1rem" }}
          component="img"
          src={image}
          alt={title}
        />
      </Grid>

      <Grid item xs={12} md={12} lg={6}>
        <Typography variant="h4">{title}</Typography>
        <Typography variant="h6">{company}</Typography>
        <Typography sx={{ marginBottom: "1rem" }} variant="body2">
          {formatPrice(price)}
        </Typography>
        <Typography variant="h5">{description}</Typography>
        <Box component="div">
          <FormControl fullWidth sx={{ margin: "1rem 0rem" }}>
            <InputLabel id="demo-simple-select-label">Amount</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={amount}
              label="Age"
              onChange={handleChange}
            >
              <MenuItem value={1}>1</MenuItem>
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={3}>3</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Button variant="contained">Add to bag</Button>
      </Grid>
    </Grid>
  );
};

export default SingleProduct;
