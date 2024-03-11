import React from "react";
import { Hero } from "../../components";
import { customFetch } from "../../utilis/index";
import FeaturedItems from "../../components/FeaturedThreeItems/FeaturedItems";

export const loader = () => async () => {
  const response = await customFetch("/products?featured=true");
  const products = response.data.data;
  return { products };
};

const Landing = () => {
  return (
    <>
      <Hero />
      <FeaturedItems />
    </>
  );
};

export default Landing;
