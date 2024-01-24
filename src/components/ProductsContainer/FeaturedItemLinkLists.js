import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Box,
} from "@mui/material";
import { Link } from "react-router-dom";
import { formatPrice } from "../../utilis";
import styled from "./AllProducts.module.css";
const FeaturedItemLinkLists = (data) => {
  console.log(data);
  const { id } = data;
  const { title, price, image, company } = data.attributes;

  return (
    <Grid sx={{ margin: "2rem 0rem" }} item xs={12} md={12} lg={12}>
      <Card className={styled.itemsLinksList}>
        <Link to={`/products/${id}`}>
          <CardMedia sx={{ height: 200 }} image={image} title={title} />
        </Link>
        <CardContent className={styled.itemLinkList}>
          <Box sx={{ marginRight: "10rem", textAlign: "center" }}>
            <Typography
              sx={{ textAlign: "center", margin: "1rem 0rem" }}
              gutterBottom
              variant="h5"
              component="div"
            >
              {title}
            </Typography>
            <Typography variant="body2">{company}</Typography>
          </Box>
          <Typography
            sx={{ textAlign: "center", fontSize: "1.25rem" }}
            variant="body2"
            color="text.secondary"
          >
            {formatPrice(price)}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default FeaturedItemLinkLists;
