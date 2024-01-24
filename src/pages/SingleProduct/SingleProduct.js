import React, { useState } from "react";
import {
  Box,
  Button,
  Grid,
  Typography,
  FormControl,
  InputLabel,
  Select,
} from "@mui/material";
import { useLoaderData } from "react-router-dom";
import { customFetch, formatPrice, generateAmountOptions } from "../../utilis";
import styled from "./SingleProduct.module.css";
import { BreadCumbsComponent } from "../../components";
export const loaderItem = async ({ params }) => {
  const response = await customFetch(`/products/${params.id}`);
  const singleDataItem = response.data.data;
  return { singleDataItem };
};

const SingleProduct = () => {
  const { singleDataItem } = useLoaderData();
  const [amount, setAmount] = useState(1);
  const handleChange = (event) => {
    setAmount(event.target.value);
  };
  const { title, company, description, image, price, colors } =
    singleDataItem.attributes;

  const [productsColor, setProductsColors] = useState(colors[0]);

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
        <Typography sx={{ margin: "1rem 0rem" }} variant="h5">
          Colors
        </Typography>
        <Box sx={{ display: "flex" }}>
          {colors.map((item) => (
            <Box
              key={item}
              sx={{
                backgroundColor: item,
                height: "30px",
                width: "30px",
                borderRadius: "50%",
                marginRight: "0.8rem",
                cursor: "pointer",
              }}
              className={`${item === productsColor ? styled.active : ""}`}
              onClick={() => setProductsColors(item)}
            />
          ))}
        </Box>
        <Box component="div">
          <FormControl fullWidth sx={{ margin: "1rem 0rem" }}>
            <InputLabel id="demo-simple-select-label">Amount</InputLabel>
            <Select
              id="amount"
              value={amount}
              label="amount"
              onChange={handleChange}
            >
              {generateAmountOptions(20)}
            </Select>
          </FormControl>
        </Box>
        <Button variant="contained">Add to bag</Button>
      </Grid>
    </Grid>
  );
};

export default SingleProduct;
