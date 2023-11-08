"use client";
import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ShowSlider from "react-slick";
import ProductItem from "../utils/ProductItem";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

interface Props {
  style: any;
  onClick: any;
}
// arrows
function SampleNextArrow(props: any) {
  const { style, onClick } = props;
  return (
    <MdChevronRight
      className={`z-10 absolute top-1/2 right-0 md:-right-3 bg-mainGreen-50 rounded-full cursor-pointer text-mainGreen-100 text-2xl md:text-4xl hover:text-white hover:bg-mainGreen-100 transition-all duration-150`}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}
//arrows
function SampleprevArrow(props: any) {
  const { style, onClick } = props;
  return (
    <MdChevronLeft
      className={`z-10 absolute top-1/2 left-0 md:-left-3 bg-mainGreen-50 rounded-full cursor-pointer hover:text-white hover:bg-mainGreen-100 transition-all duration-150 text-mainGreen-100 text-secondary text-2xl md:text-4xl`}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

export default function Slider({ products }: { products: ProductTypes[] }) {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: products.length > 4 ? 4 : products.length,
    slidesToScroll: 1,
    initialSlide: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SampleprevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          arrows: true,
          autoplay: true,
          speed: 1000,
          nextArrow: <SampleNextArrow />,
          prevArrow: <SampleprevArrow />,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: true,
          nextArrow: <SampleNextArrow />,
          prevArrow: <SampleprevArrow />,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: true,
        },
      },
    ],
  };
  return (
    <div className="my-16">
      <h1 className="text-xl font-bold md:text-2xl lg:text-3xl text-center text-gray-900 my-6">
        Other products from Naan Experts
      </h1>
      <ShowSlider {...settings}>
        {products.map((product) => (
          <div className="w-full px-2" key={product.id}>
            <ProductItem product={product} />
          </div>
        ))}
      </ShowSlider>
    </div>
  );
}
