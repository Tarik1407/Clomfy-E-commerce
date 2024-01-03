import axios from "axios";

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
