import React from "react";
import ReactStars from "react-star-ratings";

export default function StarSytem({ rate }: { rate: number }) {
  return (
    <ReactStars
      rating={rate}
      starRatedColor="#F3BA00"
      numberOfStars={5}
      name="rating"
      starDimension="17px"
      starSpacing="1px"
    />
  );
}
