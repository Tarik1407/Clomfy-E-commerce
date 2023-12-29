import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Grid,
} from "@mui/material";
import { Link } from "react-router-dom";
import { formatPrice } from "../../utilis/helpers";
const FeaturedItemLink = (data) => {
  const { id } = data;
  const { title, price, image } = data.attributes;

  return (
    <Grid sx={{ margin: "8rem 0rem" }} item xs={12} md={6} lg={4}>
      <Card sx={{ maxWidth: 345 }}>
        <Link to={`/products/${id}`}>
          <CardMedia sx={{ height: 200 }} image={image} title={title} />
        </Link>
        <CardContent>
          <Typography
            sx={{ textAlign: "center", margin: "1rem 0rem" }}
            gutterBottom
            variant="h5"
            component="div"
          >
            {title}
          </Typography>
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

export default FeaturedItemLink;
