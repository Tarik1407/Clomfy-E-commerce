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
import { customFetch, formatPrice, generateOptionsAmount } from "../../utilis";
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

  const [productColor, setProductColor] = useState(colors[0]);

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
          {colors.map((color) => (
            <Box
              key={color}
              sx={{
                backgroundColor: color,
                height: "35px",
                width: "35px",
                borderRadius: "50%",
                cursor: "pointer",
                margin: "0.2rem",
              }}
              className={`${color === productColor ? styled.active : ""}`}
              onClick={() => setProductColor(color)}
            />
          ))}
        </Box>
        <Box component="div">
          <FormControl fullWidth sx={{ margin: "1rem 0rem" }}>
            <Select id="amount" value={amount} onChange={handleChange}>
              {generateOptionsAmount(15)}
            </Select>
          </FormControl>
        </Box>
        <Button onClick={() => console.log("Add to bag")} variant="contained">
          Add to bag
        </Button>
      </Grid>
    </Grid>
  );
};

export default SingleProduct;
