"use client";
import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ProductItem from "../utils/ProductItem";

export default function BestSellerSlider({
  products,
}: {
  products: ProductTypes[];
}) {
  const [currentSellect, setCurrentSellect] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    beforeChange: (prev: number, next: number) => {
      setCurrentSellect(next);
    },
    appendDots: (dots: any) => {
      console.log(dots);
      return (
        <div className="py-4">
          <ul> {dots} </ul>
        </div>
      );
    },
    customPaging: (i: number) => {
      return (
        <div
          className={`${
            currentSellect === i ? "bg-mainYellew-200" : "bg-mainGreen-100"
          } mt-2 h-1 rounded-lg hover:bg-mainYellew-200`}
        ></div>
      );
    },
  };
  return (
    <div className="  text-end">
      <Slider {...settings}>
        {products.map((product) => (
          <div className="w-full" key={product.id}>
            <ProductItem product={product} />
          </div>
        ))}
      </Slider>
    </div>
  );
}
