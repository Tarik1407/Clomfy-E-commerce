import Carousel from "react-material-ui-carousel";
import React from "react";
import { carouselImages } from "./imagesArray";
import CarouselItem from "./CarouselItem";

const CarouselBox = () => {
  return (
    <Carousel>
      {carouselImages.map((item) => (
        <CarouselItem key={item.id} {...item} />
      ))}
    </Carousel>
  );
};

export default CarouselBox;
