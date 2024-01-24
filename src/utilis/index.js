import axios from "axios";
import { MenuItem } from "@mui/material";
const productionUrl = "https://strapi-store-server.onrender.com/api";

export const customFetch = axios.create({
  baseURL: productionUrl,
});

export const formatPrice = (price) => {
  const newNumber = Intl.NumberFormat("en-us", {
    style: "currency",
    currency: "usd",
  }).format(price / 100);
  return newNumber;
};

export const generateAmountOptions = (number) => {
  return Array.from({ length: number }, (_, index) => {
    const amount = index + 1;

    return (
      <MenuItem key={amount} value={amount}>
        {amount}
      </MenuItem>
    );
  });
};
